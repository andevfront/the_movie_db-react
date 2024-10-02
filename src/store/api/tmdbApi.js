import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdb",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) =>
        `movie/popular?api_key=${apiKey}&language=es-ES&page=${page}`,
    }),
    getUpcomingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${apiKey}&language=es-ES`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${apiKey}&language=es-ES`,
    }),
    getMovieVideos: builder.query({
      query: (movieId) =>
        `movie/${movieId}/videos?api_key=${apiKey}&language=es-MX`,
    }),
    getMovieImages: builder.query({
      query: (movieId) => `movie/${movieId}/images?api_key=${apiKey}`,
    }),
    getMovieCredits: builder.query({
      query: (movieId) =>
        `movie/${movieId}/credits?api_key=${apiKey}&language=es-ES`,
    }),
    getNowPlayingMovies: builder.query({
      query: () => `movie/now_playing?api_key=${apiKey}&language=es-ES`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${apiKey}&language=es-ES`,
    }),
    searchMovies: builder.query({
      query: (searchTerm) =>
        `search/movie?api_key=${apiKey}&language=es-ES&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetMovieImagesQuery,
  useGetMovieCreditsQuery,
  useGetNowPlayingMoviesQuery,
  useSearchMoviesQuery,
} = tmdbApi;
