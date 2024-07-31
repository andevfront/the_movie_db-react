import { HeroCarousel, MoviesGrid, NowPlayingMoviesAside} from "./components";

export const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto grid grid-cols-12 px-4 xl:gap-10 xl:px-8">
        <MoviesGrid />
        <NowPlayingMoviesAside />
      </div>
    </>
  );
};
