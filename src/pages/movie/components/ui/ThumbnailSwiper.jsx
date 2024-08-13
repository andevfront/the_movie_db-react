import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { YouTubeThumbnail } from "../ui";
import styles from "../../styles/swiper-gallery.module.css";

export const ThumbnailSwiper = ({
  trailerId,
  trailers,
  filteredBackdrops,
  setThumbsSwiper,
}) => {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={filteredBackdrops.length >= 5}
      spaceBetween={10}
      slidesPerView={4}
      watchSlidesProgress={true}
      modules={[Navigation, Thumbs]}
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
      }}
      className={styles.mySwiper2}
    >
      {trailerId && trailers.length > 0 && (
        <SwiperSlide className={styles.swiperSlide2}>
          <YouTubeThumbnail videoId={trailerId} />
        </SwiperSlide>
      )}
      {filteredBackdrops && filteredBackdrops.length > 0 && (
        <>
          {filteredBackdrops.slice(0, 6).map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide2}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt=""
                  className="group cursor-pointer transition-all duration-500"
                />
              </figure>
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
};

ThumbnailSwiper.propTypes = {
  trailerId: PropTypes.string,
  trailers: PropTypes.array.isRequired,
  filteredBackdrops: PropTypes.array.isRequired,
  thumbsSwiper: PropTypes.object,
};
