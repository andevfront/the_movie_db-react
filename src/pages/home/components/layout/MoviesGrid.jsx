import { useGetPopularMoviesQuery } from "../../../../store";
import { MovieCard, SkeletonCard } from "../ui";

export const MoviesGrid = () => {
  const { data = {}, isLoading } = useGetPopularMoviesQuery();
  const { results: movies = [] } = data;

  return (
    <div className="col-span-12 xl:col-span-10">
      <h1 className="mb-8 text-2xl font-bold">Películas Populares</h1>
      {isLoading ? (
        <div className="grid grid-cols-12 gap-6">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};
