import { getAccessToken } from "@/feature/spotify";
import { getStoredAccessToken, storeAccessToken } from "./spotify";

export const fetcher = async <T>(
  ...args: Parameters<typeof fetch>
): Promise<T> => {
  const res = await fetch(...args);

  // handle error
  if (!res.ok) throw { status: res.status, statusText: res.statusText };
  return res.json() as T;
};

export const spotifyNowPlayingFetcher = async (url: string) => {
  const accessToken = getStoredAccessToken();
  const headers = { Authorization: `Bearer ${accessToken}` };

  const response = await fetch(url, {
    headers,
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });

  if (response.status === 204) {
    return {
      isPlaying: false,
      songUrl: null,
      name: null,
      artist: null,
    };
  }

  // Handle expire access token
  if (response.status === 401) {
    const accessToken = await getAccessToken();

    if (accessToken) {
      // Update the stored access token
      storeAccessToken(accessToken);

      // Retry
      await spotifyNowPlayingFetcher(url);
    }
  }

  const song = await response.json();

  return {
    isPlaying: song.is_playing as boolean,
    songUrl: song.item.external_urls.spotify as string,
    name: song.item.name as string,
    artist: song.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(", ") as string,
  };
};
