import PropTypes from "prop-types";
import YouTube from "react-youtube";

export const MovieTrailer = ({ trailerId }) => {
  return (
    <YouTube
      className="PELICULA relative h-0 overflow-hidden pb-[56.25%]"
      iframeClassName="PELICULA absolute top-0 left-0 h-full w-full"
      videoId={trailerId}
    />
  );
};

MovieTrailer.propTypes = {
  trailerId: PropTypes.string.isRequired,
};
