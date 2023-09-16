"use client";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const List = [
  {
    title: "Guaranteed Rental Income",
    content:
      "With our property management services, you can say goodbye to the uncertainty of vacant properties. We offer landlords a fixed, guaranteed income stream, providing you with peace of mind.",
  },
  {
    title: "Full Property Management",
    content:
      "We handle every aspect of property management, from tenant sourcing and vetting to maintenance, bills and regular inspections. You won't need to worry about a thing.",
  },
  {
    title: "Tailored Solutions",
    content:
      "We understand that every property is unique. Our customised solutions are designed to meet your specific needs and goals.",
  },
  {
    title: "Increased Profitability",
    content:
      "By partnering with us, you can enjoy guaranteed rent without the stress of day-to-day property management.",
  },
  {
    title: " 24/7 Support",
    content:
      " We provide round-the-clock support for both you and tenants, ensuring that any issues are promptly resolved.",
  },
];

export default function index() {
  return (
    <>
      <div style={{ color: "white" }} className={styles.wrapper}>
        <>
          {List.map((items, index) => (
            <AnimatedText key={index}>
              <div>
                <p>{items.title}</p>
                <p>{items.content}</p>
                <hr className={styles.line} />
              </div>
            </AnimatedText>
          ))}
        </>
        <h4 className={styles.subtext}>
          At Soga Property Solutions, we are proud to offer our property
          management services with complete transparency and integrity. We want
          to assure all landlords that there's absolutely no catch when you
          partner with us. Our commitment to you is straightforward: honest,
          reliable, and hassle-free property management, without hidden fees or
          surprises.
        </h4>
      </div>
    </>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
  }, []);

  return (
    <h3 ref={text} className={styles.description}>
      {children}
    </h3>
  );
}
