import PropTypes from "prop-types";

import { useGetTrendingMoviesQuery } from "../../../../store";
import { TrendItem } from "./TrendItem";

export const TrendingMovies = ({ timeFrame }) => {
  const { data = {} } = useGetTrendingMoviesQuery(timeFrame);
  const { results: movies = [] } = data;

  return (
    <div className="flex flex-col gap-6">
      {movies.slice(0, 5).map((movie) => (
        <TrendItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

TrendingMovies.propTypes = {
  timeFrame: PropTypes.string.isRequired,
};
