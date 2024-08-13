import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

export const MovieTrailer = ({ trailerId, isPlaying }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  return (
    <figure>
      <YouTube
        className="relative h-full overflow-hidden pb-[56.25%]"
        iframeClassName="absolute top-0 left-0 h-full w-full"
        videoId={trailerId}
        onReady={(event) => {
          playerRef.current = event.target;
        }}
      />
    </figure>
  );
};

MovieTrailer.propTypes = {
  trailerId: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
