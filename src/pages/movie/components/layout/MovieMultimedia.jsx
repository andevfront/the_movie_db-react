import { useMemo } from "react";
import PropTypes from "prop-types";
import { filterImages, getTrailerId } from "../../helpers";
import {
  useGetMovieImagesQuery,
  useGetMovieVideosQuery,
} from "../../../../store";
import { MovieGallery, MovieTrailer } from "../ui";

export const MovieMultimedia = ({ id }) => {
  const { data: dataTrailers = {} } = useGetMovieVideosQuery(id, {
    skip: !id,
  });

  const { data: dataImages = {} } = useGetMovieImagesQuery(id, {
    skip: !id,
  });

  const { results: trailers = [] } = dataTrailers;
  const { backdrops = [] } = dataImages;
  const trailerId = useMemo(() => getTrailerId(trailers), [trailers]);
  const filteredBackdrops = useMemo(() => filterImages(backdrops), [backdrops]);

  return (
    <>
      {trailerId && filteredBackdrops && (
        <div className="col-span-9">
          {trailerId && trailers.length > 0 && (
            <MovieTrailer trailerId={trailerId} />
          )}
          {filteredBackdrops && filteredBackdrops.length > 0 && (
            <>
              <h2 className="mb-5 mt-7 text-2xl font-semibold text-white">
                Imágenes
              </h2>
              <MovieGallery images={filteredBackdrops} />
            </>
          )}
        </div>
      )}
    </>
  );
};

MovieMultimedia.propTypes = {
  id: PropTypes.string.isRequired,
};
