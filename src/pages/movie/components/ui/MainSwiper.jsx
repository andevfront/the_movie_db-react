import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { MovieTrailer } from "../ui/MovieTrailer";
import styles from "../../styles/swiper-gallery.module.css";

export const MainSwiper = ({
  trailerId,
  trailers,
  filteredBackdrops,
  thumbsSwiper,
  setSwiper,
  isPlaying,
}) => {
  return (
    <Swiper
      loop={filteredBackdrops.length >= 5}
      spaceBetween={10}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      effect="fade"
      thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
      modules={[Navigation, EffectFade, Thumbs]}
      className={styles.mySwiper}
      onSwiper={setSwiper}
    >
      {trailerId && trailers.length > 0 && (
        <SwiperSlide className={styles.swiperSlide}>
          <MovieTrailer trailerId={trailerId} isPlaying={isPlaying} />
        </SwiperSlide>
      )}
      {filteredBackdrops && filteredBackdrops.length > 0 && (
        <>
          {filteredBackdrops.slice(0, 6).map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt=""
                  className="cursor-pointer transition-all duration-500 hover:opacity-75"
                />
              </figure>
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
};

MainSwiper.propTypes = {
  trailerId: PropTypes.string,
  trailers: PropTypes.array.isRequired,
  filteredBackdrops: PropTypes.array.isRequired,
  thumbsSwiper: PropTypes.object,
  setSwiper: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
