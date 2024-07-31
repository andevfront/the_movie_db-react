import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import { HiStar } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import "animate.css";

import { decimalRounded } from "../../../../helpers";
import { notShowing } from "../../../../assets";
import { Spinner } from "../../../../components";

export const NewRelease = ({
  id,
  title,
  poster_path = notShowing,
  overview,
  vote_average,
  release_date,
  index,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div className="relative flex gap-2">
      <Link
        className="h-36 w-24 min-w-max overflow-hidden rounded"
        to={`movie/${id}`}
      >
        {loadingImage && (
          <div className="flex h-36 w-24 items-center justify-center">
            <Spinner />
          </div>
        )}
        <figure className="h-full w-full">
          <img
            className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn block"} h-full w-full object-cover`}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            onLoad={() => setLoadingImage(false)}
          />
        </figure>
      </Link>
      <div>
        <Link to={`movie/${id}`}>{title}</Link>
        <p className="my-2 line-clamp-4 text-xs text-slate-400">{overview}</p>
        <div className="mt-4 flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs">
            <HiStar className="h-4 w-4 text-yellow-400" />
            {decimalRounded(vote_average)}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <HiCalendarDays className="h-4 w-4 text-white" />
            {moment(release_date).format("YYYY")}
          </span>
        </div>
      </div>
      {!loadingImage && (
        <span className="pointer-events-none absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-900 bg-sky-500 text-sm">
          #{index + 1}
        </span>
      )}
    </div>
  );
};

NewRelease.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
