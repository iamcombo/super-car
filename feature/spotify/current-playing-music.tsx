"use client";

import useSWR, { SWRConfig } from "swr";
import { spotifyNowPlayingFetcher } from "@/core/utils";
import { NOW_PLAYING_ENDPOINT } from "@/core/constants";
import { SpotifyIcon } from "@/core/components/icon";

const styles = "flex space-x-2 items-center text-neutral-200";

export const CurrentPlayingMusic = () => {
  const { data } = useSWR(NOW_PLAYING_ENDPOINT, spotifyNowPlayingFetcher, {
    refreshInterval: 3000,
    revalidateOnMount: true,
  });

  if (!data || !data.isPlaying) {
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
    <SWRConfig>
      <div className={styles}>
        <span className="truncate">
          Listening to {data.name} by {data.artist}
        </span>
        <span>
          <SpotifyIcon width={16} height={16} fill="#FFF" />
        </span>
      </div>
    </SWRConfig>
  );
};
