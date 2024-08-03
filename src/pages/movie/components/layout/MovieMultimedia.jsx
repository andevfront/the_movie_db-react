import { useMemo } from "react";
import PropTypes from "prop-types";

import { getTrailerId } from "../../helpers";
import { useGetMovieVideosQuery } from "../../../../store";
import { MovieTrailer } from "../ui";

export const MovieMultimedia = ({ id }) => {
  const { data = {} } = useGetMovieVideosQuery(id, {
    skip: !id,
  });
  const { results: trailers = [] } = data;
  const trailerId = useMemo(() => getTrailerId(trailers), [trailers]);

  return (
    <div className="col-span-9">
      {trailerId && trailers.length > 0 && (
        <MovieTrailer trailerId={trailerId} />
      )}
    </div>
  );
};

MovieMultimedia.propTypes = {
  id: PropTypes.string.isRequired,
};
