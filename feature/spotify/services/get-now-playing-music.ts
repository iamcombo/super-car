import { NOW_PLAYING_ENDPOINT } from "@/core/constants";
import { getAccessToken } from "./get-access-token";

export async function getNowPlaying() {
  const accessToken = await getAccessToken();
  const headers = { Authorization: `Bearer ${accessToken}` };

  const response = await fetch(NOW_PLAYING_ENDPOINT, { headers });

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
}
