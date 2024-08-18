import React from "react";
import { Suspense } from "react";
import About from "../../components/About/About";
import Products from "../../components/Products/Products";
import Callback from "../../components/CallBack/Callback";
import Main from "../../components/Main/Main";
import LoadingPage from "../LoadingPage/LoadingPage";

function HomePage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Main />
      <About />
      <Products />
      <Callback />
    </Suspense>
  );
}

export default HomePage;
