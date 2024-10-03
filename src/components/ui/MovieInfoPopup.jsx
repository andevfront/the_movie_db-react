import PropTypes from "prop-types";
import moment from "moment";
import { HiCalendarDays, HiOutlineClock, HiStar } from "react-icons/hi2";

import { useGetMovieDetailsQuery } from "../../store";
import { decimalRounded } from "../../helpers";

export const MovieInfoPopup = ({ id }) => {
  const { data: movie = {} } = useGetMovieDetailsQuery(id);

  const { title, release_date, runtime, overview, poster_path, vote_average } =
    movie;

  return (
    <div className="pointer-events-none invisible absolute left-[60%] top-[6%] z-[2] hidden w-72 scale-0 overflow-hidden rounded-lg bg-slate-900 opacity-0 transition-all duration-500 group-hover:visible group-hover:scale-100 group-hover:opacity-100 lg:block">
      <div className="relative">
        <figure className="absolute inset-0 h-full w-full">
          <img
            className="h-full w-full scale-150 object-cover opacity-50 blur-md"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </figure>
        <div className="relative p-4 text-slate-400">
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <div className="my-4 flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs">
              <HiStar className="h-4 w-4 text-yellow-400" />
              {decimalRounded(vote_average)}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <HiCalendarDays className="h-4 w-4 text-white" />
              {moment(release_date).format("YYYY")}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <HiOutlineClock className="h-4 w-4 text-white" />
              {runtime} min
            </span>
          </div>
          {overview && <p className="line-clamp-[7] text-xs">{overview}</p>}
        </div>
      </div>
    </div>
  );
};

MovieInfoPopup.propTypes = {
  id: PropTypes.number.isRequired,
};
