import { createBrowserRouter } from "react-router-dom";
import { LayoutDefault } from "../layout/LayoutDefault";
import { HomePage, MoviePage, NotFoundPage } from "../pages";

export const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);
