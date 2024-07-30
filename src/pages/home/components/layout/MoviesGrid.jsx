import { useState } from "react";

import { useGetPopularMoviesQuery } from "../../../../store";
import { Pagination } from "../../../../components";
import { MovieCard, SkeletonCard } from "../ui";

export const MoviesGrid = () => {
  const [page, setPage] = useState(1);

  const { data = {}, isLoading, isFetching } = useGetPopularMoviesQuery(page);

  const { results: movies = [], total_pages = 1 } = data;

  return (
    <div className="col-span-12 xl:col-span-10">
      <h1 className="mb-8 text-2xl font-bold">Películas Populares</h1>
      {isLoading || isFetching ? (
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
      <Pagination setPage={setPage} totalPages={total_pages} />
    </div>
  );
};
