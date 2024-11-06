import { useSearchMoviesQuery } from "../../store";
import { LoadingSearch } from "./LoadingSearch";
import { SearchCard } from "./SearchCard";
import { NoResultsFound } from "./NoResultsFound";

export const SearchResults = ({ query, setIsFocused }) => {
  const { data = {}, isLoading } = useSearchMoviesQuery({ searchTerm: query });

  const { results: movies = [] } = data;

  const handleClick = () => setIsFocused(false);

  return (
    <div className="absolute right-0 top-full mt-3 max-h-64 min-w-[290px] overflow-y-auto rounded-lg bg-slate-800/50 p-2 scrollbar scrollbar-track-slate-700 scrollbar-thumb-slate-800 hover:scrollbar-thumb-slate-600">
      {isLoading ? (
        <LoadingSearch />
      ) : movies.length > 0 ? (
        <>
          {movies.map((item) => (
            <SearchCard key={item.id} handleClick={handleClick} {...item} />
          ))}
        </>
      ) : (
        <NoResultsFound />
      )}
    </div>
  );
};
