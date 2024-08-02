import { HeroCarousel, MoviesGrid, NowPlayingMoviesAside } from "./components";

export const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto my-20 grid grid-cols-12 gap-y-10 px-4 xl:gap-10 xl:px-8">
        <MoviesGrid />
        <NowPlayingMoviesAside />
      </div>
    </>
  );
};
