import { useLanyardWS } from 'use-lanyard';
import { SiSpotify } from 'react-icons/si';

const DISCORD_ID = "822066211075784714";
const styles = 'flex space-x-2 items-center text-neutral-200';

const CurrentPlayingMusic = () => {
  const data = useLanyardWS(DISCORD_ID);

  if(!data?.spotify) {
    return (
      <div className={styles}>
        <span>Not playing anything</span>
        <span><SiSpotify /></span>
      </div>
    )
  }

  return (
    <div className={styles}>
      <span className="truncate">
				Listening to {data.spotify.song} by {data.spotify.artist}
			</span>
			<span>
				<SiSpotify />
			</span>
    </div>
  );
}

export default CurrentPlayingMusic;
