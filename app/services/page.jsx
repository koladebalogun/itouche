"use client";
import { useEffect } from "react";
import Intro from "../../components/Servicecomponents/Intro";
import Services from "../../components/Servicecomponents/Services";
import Header from "../../components/Header";

const Service = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Header src={"logo.png"} text={"Soga property solutions"} />
      <main>
        <Intro />
        <Services />
      </main>
    </>
  );
};

export default Service;
