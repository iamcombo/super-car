export interface INowPlayingResponse {
  isPlaying: boolean;
  songUrl: string | null;
  name: string | null;
  artist: string | null;
}

export interface ICurrentPlayingProp {
  nowPlaying: INowPlayingResponse;
}
