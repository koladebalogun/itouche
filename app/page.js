"use client";
import React, { useEffect, useState } from "react";
import Home from "../components/Homepage";
import Header from "../components/Header";
import { gsap } from "gsap";

const Page = () => {
  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default Page;
