"use client"
import React, { useEffect, useState } from "react";
import Home from '../components/Homepage'
import Header from '../components/Header'
import { gsap } from "gsap";


function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const page = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  
  return (
    <>
      <Header dimensions={dimensions} />
      <Home dimensions={dimensions} />

      {/* <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation /> */}
    </>
  );
};

export default page;
