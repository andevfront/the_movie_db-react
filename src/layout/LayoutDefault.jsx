import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Header } from "../components";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};
