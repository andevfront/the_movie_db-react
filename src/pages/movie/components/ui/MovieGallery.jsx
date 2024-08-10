import PropTypes from "prop-types";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { MovieImage } from "./MovieImage";

export const MovieGallery = ({ images = {} }) => {
  return (
    <Gallery>
      <div className="grid grid-cols-12 gap-4">
        {images.slice(0, 6).map(({ file_path }, index) => (
          <MovieImage key={index} index={index} file_path={file_path} />
        ))}
      </div>
    </Gallery>
  );
};

MovieGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
