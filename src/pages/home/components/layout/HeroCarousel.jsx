import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { useGetPopularMoviesQuery } from "../../../../store";
import { HeroCarouselItem, SkeletonHeroCarouselItem } from "../ui";

export const HeroCarousel = () => {
  const { data = {}, isLoading } = useGetPopularMoviesQuery();
  const { results: movies = [] } = data;

  if (isLoading)
    return (
      <>
        <SkeletonHeroCarouselItem />
      </>
    );

  return (
    <Swiper
      className="relative"
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      loop={movies.length >= 5}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id}>
          <HeroCarouselItem id={movie.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
