import { useParams } from "react-router-dom";
import { Backdrop, MovieOverview } from "./components";
import { useGetMovieDetailsQuery } from "../../store";

export const MoviePage = () => {
  const { id } = useParams();

  const { data = {} } = useGetMovieDetailsQuery(id);
  const { backdrop_path } = data;

  return (
    <>
      <Backdrop backdrop_path={backdrop_path} />
      <div className="container relative mx-auto px-4 pt-32 xl:px-8">
        <MovieOverview id={id} />
      </div>
    </>
  );
};
