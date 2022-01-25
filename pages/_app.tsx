import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";

const setHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    setHeight();

    window.addEventListener("resize", () => {
      setHeight();
    });
  }, []);
  return <Component {...pageProps} />;
};

export default App;
