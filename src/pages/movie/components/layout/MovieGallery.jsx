import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  useGetMovieImagesQuery,
  useGetMovieVideosQuery,
} from "../../../../store";
import { filterImages, getTrailerId } from "../../helpers";
import { MainSwiper, SwiperNavigationButtons, ThumbnailSwiper } from "../ui";

export const MovieGallery = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: dataTrailers = {} } = useGetMovieVideosQuery(id, { skip: !id });
  const { data: dataImages = {} } = useGetMovieImagesQuery(id, { skip: !id });

  const { results: trailers = [] } = dataTrailers;
  const { backdrops = [] } = dataImages;

  const trailerId = useMemo(() => getTrailerId(trailers), [trailers]);
  const filteredBackdrops = useMemo(() => filterImages(backdrops), [backdrops]);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper && mainSwiper.thumbs) {
      mainSwiper.thumbs.swiper = thumbsSwiper;
      mainSwiper.thumbs.init();
      mainSwiper.thumbs.update();
    }

    if (mainSwiper) {
      mainSwiper.on("slideChange", () => {
        const activeSlideIndex = mainSwiper.activeIndex;
        if (activeSlideIndex !== 0) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
      });
    }
  }, [mainSwiper, thumbsSwiper]);

  return (
    <div className="gallery-container col-span-9">
      <MainSwiper
        trailerId={trailerId}
        trailers={trailers}
        filteredBackdrops={filteredBackdrops}
        setSwiper={setMainSwiper}
        thumbsSwiper={thumbsSwiper}
        isPlaying={isPlaying}
      />
      <ThumbnailSwiper
        trailerId={trailerId}
        trailers={trailers}
        filteredBackdrops={filteredBackdrops}
        setThumbsSwiper={setThumbsSwiper}
      />
      <SwiperNavigationButtons />
    </div>
  );
};

MovieGallery.propTypes = {
  id: PropTypes.string.isRequired,
};
