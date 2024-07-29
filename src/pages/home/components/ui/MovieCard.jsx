import { useState } from "react";
import { Link } from "react-router-dom";
import { notShowing } from "../../../../assets";
import { MovieInfoPopup } from "./MovieInfoPopup";
import { Spinner } from "../../../../components";

import "animate.css";

export const MovieCard = ({ id, title, poster_path = notShowing }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div className="group relative col-span-12 sm:col-span-6 md:col-span-3">
      <Link to={`movie/${id}`}>
        <div className="flex flex-col">
          {loadingImage && (
            <div className="flex h-[500px] w-full items-center justify-center sm:h-[450px] md:h-[267px] lg:h-[350px]">
              <Spinner />
            </div>
          )}
          <figure
            className={`${loadingImage ? "" : "animate__animated animate__fadeIn bg-black"} h-full w-full overflow-hidden rounded-lg`}
          >
            <img
              className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn block"} h-full w-full object-cover transition-all duration-500 group-hover:opacity-50`}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              onLoad={() => setLoadingImage(false)}
            />
          </figure>
        </div>
        <h3 className="animate__animated animate__fadeIn line-clamp-1 text-center transition-all duration-500 group-hover:text-cyan-500">
          {title}
        </h3>
      </Link>
      <MovieInfoPopup id={id} />
    </div>
  );
};
