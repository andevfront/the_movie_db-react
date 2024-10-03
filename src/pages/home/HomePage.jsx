import { useState } from "react";
import { MoviesGrid } from "../../components";
import { HeroCarousel, NowPlayingMoviesAside } from "./components";
import { useGetPopularMoviesQuery } from "../../store";

export const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data = {}, isLoading, isFetching } = useGetPopularMoviesQuery(page);

  const { results: movies = [], total_pages = 1 } = data;

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto my-20 grid grid-cols-12 gap-y-10 px-4 xl:gap-10 xl:px-8">
        <div className="col-span-12 xl:col-span-8">
          <h1 className="mb-8 text-2xl font-bold">Películas Populares</h1>
          <MoviesGrid
            movies={movies}
            isLoading={isLoading || isFetching}
            totalPages={total_pages}
            setPage={setPage}
          />
        </div>
        <NowPlayingMoviesAside />
      </div>
    </>
  );
};
