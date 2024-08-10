import { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "react-photoswipe-gallery";
import "animate.css";
import { Spinner } from "../../../../components";

export const MovieImage = ({ index, file_path }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <Item
      key={index}
      original={`https://image.tmdb.org/t/p/original${file_path}`}
      thumbnail={`https://image.tmdb.org/t/p/w500${file_path}`}
      width="3840"
      height="2160"
    >
      {({ ref, open }) => (
        <>
          {loadingImage && (
            <div className="col-span-6 sm:col-span-4">
              <div className="flex h-[99px] w-[176px] items-center justify-center sm:h-[108px] sm:w-[192px] md:h-[132px] md:w-[234px] lg:h-[131px] lg:w-[234px] xl:h-[163] xl:w-[290px]">
                <Spinner />
              </div>
            </div>
          )}
          <figure className="col-span-6 overflow-hidden rounded transition-all duration-500 hover:scale-105 sm:col-span-4">
            <img
              ref={ref}
              src={`https://image.tmdb.org/t/p/w500${file_path}`}
              alt={index}
              className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn block"} cursor-pointer transition-all duration-500 hover:opacity-75`}
              onClick={open}
              onLoad={() => setLoadingImage(false)}
            />
          </figure>
        </>
      )}
    </Item>
  );
};

MovieImage.propTypes = {
  index: PropTypes.number.isRequired,
  file_path: PropTypes.string.isRequired,
};
