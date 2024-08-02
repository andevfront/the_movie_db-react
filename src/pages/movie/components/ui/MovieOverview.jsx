import PropTypes from "prop-types";
import moment from "moment";
import "moment/dist/locale/es";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StarRatings from "react-star-ratings";
import { HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";

import { formatDuration, roundedInteger, scaleAndRound } from "../../helpers";
import { notShowing } from "../../../../assets";
import { useGetMovieDetailsQuery } from "../../../../store";
import "../../styles/react-circular-progressbar.css";

export const MovieOverview = ({ id }) => {
  const { data: movie = {} } = useGetMovieDetailsQuery(id);

  const {
    title,
    poster_path,
    original_title,
    tagline,
    runtime,
    overview,
    genres = [],
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <>
      <section className="grid grid-cols-3 gap-10 text-slate-400 lg:grid-cols-12">
        <figure className="col-span-3 hidden lg:block">
          <img
            className="w-full overflow-hidden rounded-lg object-cover"
            src={`${poster_path ? "https://image.tmdb.org/t/p/w500" + poster_path : notShowing}`}
            alt={title}
          />
        </figure>
        <div className="col-span-3 lg:col-span-9">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p>{original_title}</p>
          {tagline && (
            <em className="my-4 block text-xl font-light">{tagline}</em>
          )}
          <div className="my-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-0">
            <div className="flex items-center gap-2 border-slate-400 sm:mr-5 sm:border-r sm:pr-5">
              <CircularProgressbar
                value={vote_average * 10}
                valueStart={0}
                valueEnd={100}
                text={`${roundedInteger(vote_average)}%`}
              />
              <div className="flex flex-col gap-1">
                <StarRatings
                  rating={vote_average ? scaleAndRound(vote_average) : 0}
                  starRatedColor="#0ea5e9"
                  numberOfStars={5}
                  name="rating"
                  starDimension="24px"
                  starSpacing="0px"
                />
                <small className="text-xs">
                  ({vote_count} votos, promedio: {scaleAndRound(vote_average)} /
                  5)
                </small>
              </div>
            </div>
            <div className="flex gap-5 sm:flex-col lg:flex-row lg:items-center">
              {runtime > 0 && (
                <div className="flex items-center gap-2">
                  <HiOutlineClock className="h-6 w-6 text-white" />
                  <span> {formatDuration(runtime)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <HiCalendarDays className="h-6 w-6 text-white" />
                <span>
                  {moment(release_date).format("D [de] MMMM [de] YYYY")}
                </span>
              </div>
            </div>
          </div>
          {overview && (
            <>
              <h2 className="mb-2 mt-5 text-2xl font-semibold text-white">
                Descripción general
              </h2>
              <p className="mb-5">{overview}</p>
            </>
          )}
          {genres.length > 0 && (
            <span>
              <b className="text-white">Género:</b>{" "}
              {genres.map((item) => item.name).join(", ")}
            </span>
          )}
        </div>
      </section>
    </>
  );
};

MovieOverview.propTypes = {
  id: PropTypes.string.isRequired,
};
