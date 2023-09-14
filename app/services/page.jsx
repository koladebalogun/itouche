"use client";
import { useEffect } from "react";
import Intro from "../../components/Servicecomponents/Intro";
import Description from "../../components/Servicecomponents/Description";
import Services from "../../components/Servicecomponents/Services";

const services = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main  style={{color:'white'}}>
      hello
      <Intro />
      <Description />
      <Services />
    </main>
  );
};

export default services;
