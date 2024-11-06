import { useState } from "react";
import { Link } from "react-router-dom";
import { notShowing } from "../../assets";

export const SearchCard = ({ handleClick, id, title, poster_path }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <Link
      className="flex gap-2 p-2 transition-all duration-300 hover:bg-slate-700/50"
      key={id}
      to={`movie/${id}`}
      onClick={handleClick}
    >
      <figure className="h-16 w-16 flex-shrink-0">
        <img
          className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn"} h-full w-full object-cover`}
          src={`${poster_path ? "https://image.tmdb.org/t/p/w500" + poster_path : notShowing}`}
          alt={title}
          onLoad={() => setLoadingImage(false)}
        />
      </figure>
      <span className="text-slate-400">{title}</span>
    </Link>
  );
};
