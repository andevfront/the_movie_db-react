import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Backdrop,
  MovieDetails,
  MovieOverview,
  MovieGallery,
} from "./components";
import { useGetMovieDetailsQuery } from "../../store";

export const MoviePage = () => {
  const { id } = useParams();

  const { data: movie = {} } = useGetMovieDetailsQuery(id);
  const { backdrop_path, title } = movie;

  useEffect(() => {
    if (title) {
      document.title = `${title} - TMDB`;
    }
  }, [title]);

  return (
    <>
      <Backdrop backdrop_path={backdrop_path} />
      <div className="container relative mx-auto px-4 pt-32 xl:px-8">
        <MovieOverview id={id} />
        <div className="my-10 grid grid-cols-3 gap-10 lg:grid-cols-12">
          <MovieDetails {...movie} />
          <MovieGallery id={id} />
        </div>
      </div>
    </>
  );
};
