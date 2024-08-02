import { useParams } from "react-router-dom";
import { Backdrop } from "./components";
import { useGetMovieDetailsQuery } from "../../store";

export const MoviePage = () => {
  const { id } = useParams();

  const { data = {} } = useGetMovieDetailsQuery(id);
  const { backdrop_path } = data;

  return (
    <>
      <Backdrop backdrop_path={backdrop_path} />
    </>
  );
};
