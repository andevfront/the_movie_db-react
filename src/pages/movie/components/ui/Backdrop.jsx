import { useState } from "react";
import "animate.css";

export const Backdrop = ({ backdrop_path }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <>
      {backdrop_path && (
        <figure className="fixed h-screen w-screen before:absolute before:inset-0 before:z-[5] before:h-full before:w-full before:bg-[linear-gradient(to_bottom,_rgba(8,_15,_40,_0)_0%,_rgba(15,_23,_42,_1)_100%)] before:content-[''] after:absolute after:inset-0 after:z-[4] after:h-full after:w-full after:bg-black/50">
          <img
            className={`${loadingImage ? "hidden" : "animate__animated animate__fadeIn"} h-full w-full object-cover`}
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            alt=""
            onLoad={() => setLoadingImage(false)}
          />
        </figure>
      )}
    </>
  );
};
