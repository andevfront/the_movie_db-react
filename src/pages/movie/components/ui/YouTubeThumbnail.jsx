import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

export const YouTubeThumbnail = ({ videoId }) => {
  return (
    <figure className="relative">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="YouTube Thumbnail"
        className="cursor-pointer transition-all duration-500 hover:opacity-75"
      />
      <FaPlay className="pointer-events-none absolute inset-0 z-[2] m-auto h-8 w-8 text-sky-500" />
    </figure>
  );
};

YouTubeThumbnail.propTypes = {
  videoId: PropTypes.string.isRequired,
};
