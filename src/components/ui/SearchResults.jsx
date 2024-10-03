import { useState } from "react";
import { Link } from "react-router-dom";
import { notShowing } from "../../assets";
import { useSearchMoviesQuery } from "../../store";

export const SearchResults = ({ query, setIsFocused }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const { data = {} } = useSearchMoviesQuery({ searchTerm: query });

  const { results: movies = [] } = data;

  const handleClick = () => setIsFocused(false);

  return (
    <div className="absolute right-0 top-full mt-3 max-h-64 min-w-[290px] overflow-y-auto rounded-lg bg-slate-800/50 p-2 scrollbar scrollbar-track-slate-700 scrollbar-thumb-slate-800 hover:scrollbar-thumb-slate-600">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            className="flex gap-2 p-2 transition-all duration-300 hover:bg-slate-700/50"
            key={movie.id}
            to={`movie/${movie.id}`}
            onClick={handleClick}
          >
            <figure className="h-16 w-16 flex-shrink-0">
              <img
                className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn"} h-full w-full object-cover`}
                src={`${movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : notShowing}`}
                alt={movie.title}
                onLoad={() => setLoadingImage(false)}
              />
            </figure>
            <span className="text-slate-400 dark:text-white">
              {movie.title}
            </span>
          </Link>
        ))
      ) : (
        <p className="p-3 text-sm text-slate-400">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
};
