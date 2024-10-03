import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMoviesQuery } from "../../store";
import { MoviesGrid } from "../../components";

export const SearchResultsPage = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const {
    data = {},
    isLoading,
    isFetching,
  } = useSearchMoviesQuery({ searchTerm: query, page });

  const { results: movies = [], total_results, total_pages = 1 } = data;

  return (
    <div className="container relative mx-auto px-4 pt-32 xl:px-8">
      <div className="mb-8 flex justify-between">
        <h1 className="text-2xl font-bold">Resultado de búsqueda: “{query}”</h1>
        <span className="text-slate-400">{total_results} resultados</span>
      </div>
      <MoviesGrid
        movies={movies}
        isLoading={isLoading || isFetching}
        totalPages={total_pages}
        setPage={setPage}
        searchView={true}
      />
    </div>
  );
};
