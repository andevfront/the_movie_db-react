import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdb",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie/",
  }),

  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) =>
        `popular?api_key=${apiKey}&language=es-ES&page=${page}`,
    }),
    getUpcomingMovies: builder.query({
      query: () => `upcoming?api_key=${apiKey}&language=es-ES`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `${movieId}?api_key=${apiKey}&language=es-ES`,
    }),
    getMovieCredits: builder.query({
      query: (movieId) => `${movieId}/credits?api_key=${apiKey}&language=es-ES`,
    }),
    getNowPlayingMovies: builder.query({
      query: () => `now_playing?api_key=${apiKey}&language=es-ES`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
  useGetNowPlayingMoviesQuery,
} = tmdbApi;
