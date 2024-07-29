import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { useGetPopularMoviesQuery } from "../../../../store";
import { HeroCarouselItem } from "../ui";

export const HeroCarousel = () => {
  const { data = {} } = useGetPopularMoviesQuery();
  const { results: movies = [] } = data;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={movies.length >= 10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {movies.slice(0, 10).map((movie) => (
        <SwiperSlide key={movie.id}>
          <HeroCarouselItem id={movie.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
