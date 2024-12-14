"use client";

import { useLanyardWS } from "use-lanyard";
import { SpotifyIcon } from "../icon";

const DISCORD_ID = "822066211075784714";
const styles = "flex space-x-2 items-center text-neutral-200";

export const CurrentPlayingMusic = () => {
  const data = useLanyardWS(DISCORD_ID);

  if (!data?.spotify) {
    return (
      <div className={styles}>
        <span>Not playing anything</span>
        <span>
          <SpotifyIcon width={16} height={16} fill="#FFF" />
        </span>
      </div>
    );
  }

  return (
    <div className={styles}>
      <span className="truncate">
        Listening to {data.spotify.song} by {data.spotify.artist}
      </span>
      <span>
        <SpotifyIcon width={16} height={16} fill="#FFF" />
      </span>
    </div>
  );
};
