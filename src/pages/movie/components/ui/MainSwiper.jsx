import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { MovieTrailer } from "../ui/MovieTrailer";
import "../../styles/swiper-gallery.css";

export const MainSwiper = ({
  trailerId,
  trailers,
  filteredBackdrops,
  thumbsSwiper,
  setSwiper,
  isPlaying,
}) => (
  <Swiper
    loop={filteredBackdrops.length >= 5}
    spaceBetween={10}
    navigation={{
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }}
    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
    modules={[Navigation, Thumbs]}
    className="mySwiper2"
    onSwiper={setSwiper}
  >
    {trailerId && trailers.length > 0 && (
      <SwiperSlide>
        <MovieTrailer trailerId={trailerId} isPlaying={isPlaying} />
      </SwiperSlide>
    )}
    {filteredBackdrops && filteredBackdrops.length > 0 && (
      <>
        {filteredBackdrops.slice(0, 6).map((image, index) => (
          <SwiperSlide key={index}>
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

MainSwiper.propTypes = {
  trailerId: PropTypes.string,
  trailers: PropTypes.array.isRequired,
  filteredBackdrops: PropTypes.array.isRequired,
  thumbsSwiper: PropTypes.object,
  setSwiper: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
