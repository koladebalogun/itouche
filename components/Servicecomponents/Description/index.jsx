"use client";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const phrases = [
  "Welcome to The Hassle-Free Property Management.",
  "Are you a property owner looking for a more hands-off and stress-free way to maximise your rental income?",
  "We specialise in providing property owners like you with a seamless, ",
  "and worry-free solution that ensures you receive consistent, guaranteed rental income.",
];

export default function Index() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1000) {
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    }
  }, []);

  return <p ref={text}>{children}</p>;
}
