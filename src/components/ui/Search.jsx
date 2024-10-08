import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { SearchResults } from "./SearchResults";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = ({ target }) => setQuery(target.value);

  const handleBlur = ({ relatedTarget }) => {
    setTimeout(() => {
      if (!inputRef.current.contains(relatedTarget)) {
        setIsFocused(false);
        setQuery("");
      }
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim().length > 0) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setIsFocused(false);
      setQuery("");
    }
  };

  return (
    <form
      className="relative"
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    >
      <input
        className="w-52 rounded-full border border-sky-500 bg-slate-800/50 py-2 pl-4 pr-10 outline-none transition-[width] duration-500 focus:border-sky-400 sm:focus:w-60"
        ref={inputRef}
        type="search"
        name="searchMovie"
        id="searchMovie"
        placeholder="Buscar..."
        value={query}
        autoComplete="off"
        onChange={handleChange}
      />
      <button className="absolute right-0 top-0 py-2 pr-4" type="submit">
        <FiSearch className="h-6 w-6 text-sky-500" />
      </button>
      {isFocused && query && query.trim().length > 0 && (
        <SearchResults query={query} setIsFocused={setIsFocused} />
      )}
    </form>
  );
};
