import { getAccessToken } from "@/feature/spotify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetcher = async <T>(url: string, args?: any): Promise<T> => {
  const response = await fetch(url, { ...args });
  const json = (await response.json()) as unknown;
  return json as T;
};

export const spotifyNowPlayingFetcher = async (url: string) => {
  const accessToken = await getAccessToken();
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
