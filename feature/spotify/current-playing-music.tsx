"use client";

import { ICurrentPlayingProp, INowPlayingResponse } from "./type";
import { NOW_PLAYING_ENDPOINT } from "@/core/constants";
import { SpotifyIcon } from "@/core/components/icon";
import { spotifyNowPlayingFetcher } from "@/core/utils";
import useSWR, { SWRConfig } from "swr";
import { useMemo, useState } from "react";

const styles = "flex space-x-2 items-center text-neutral-200";

export const CurrentPlayingMusic = ({ nowPlaying }: ICurrentPlayingProp) => {
  const [nowPlayingData, setNowPlayingData] =
    useState<INowPlayingResponse>(nowPlaying);

  const { data } = useSWR(NOW_PLAYING_ENDPOINT, spotifyNowPlayingFetcher, {
    refreshInterval: 3000,
    revalidateOnMount: true,
  });

  useMemo(() => {
    if (!data) return;
    setNowPlayingData(data);
  }, [data]);

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
          Listening to {nowPlayingData?.name} by {nowPlayingData?.artist}
        </span>
        <span>
          <SpotifyIcon width={16} height={16} fill="#FFF" />
        </span>
      </div>
    </SWRConfig>
  );
};
