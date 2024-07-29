import { HeroCarousel, MoviesGrid, TrendingAside } from "./components";

export const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4 xl:px-8">
        <MoviesGrid />
        <TrendingAside />
      </div>
    </>
  );
};
