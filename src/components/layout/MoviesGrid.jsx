import PropTypes from "prop-types";
import { MovieCard, Pagination, SkeletonCard } from "..";

export const MoviesGrid = ({
  movies,
  isLoading,
  totalPages,
  setPage,
  searchView,
}) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {isLoading ? (
          <>
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={index} searchView={searchView} />
              ))}
          </>
        ) : (
          <>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} searchView={searchView} />
            ))}
          </>
        )}
      </div>
      <Pagination setPage={setPage} totalPages={totalPages} />
    </>
  );
};

MoviesGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  searchView: PropTypes.bool,
};
