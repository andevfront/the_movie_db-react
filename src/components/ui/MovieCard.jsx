import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import "animate.css";

import { MovieInfoPopup } from "./MovieInfoPopup";

import { Spinner } from "./Spinner";
import { notShowing } from "../../assets";

export const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
  searchView,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div
      className={`group relative col-span-6 sm:col-span-4 md:col-span-3 ${searchView ? "xl:col-span-2" : ""}`}
    >
      <Link
        to={`/movie/${id}`}
        className="relative block h-[269px] w-full overflow-hidden rounded-lg transition-all duration-500 hover:opacity-50 sm:h-[304px] md:h-[273px] lg:h-[369px] xl:h-[272px]"
      >
        {loadingImage && (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        )}
        <figure className="h-full w-full">
          <img
            className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn"} h-full w-full object-cover`}
            src={`${poster_path ? "https://image.tmdb.org/t/p/w500" + poster_path : notShowing}`}
            alt={title}
            onLoad={() => setLoadingImage(false)}
          />
        </figure>
        {!loadingImage && (
          <small
            className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn"} absolute bottom-0 right-0 m-2 rounded-full bg-sky-500 px-2 py-px text-xs`}
          >
            {moment(release_date).format("YYYY")}
          </small>
        )}
      </Link>
      {!loadingImage && <MovieInfoPopup id={id} />}
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  searchView: PropTypes.bool,
};
