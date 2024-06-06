"use client";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const List = [
  {
    title: "Personal Styling Consultations",
    content:
      "Our team of expert stylists is here to help you find the perfect pieces that complement your unique style and personality. Whether you need assistance for a special occasion or want to revamp your wardrobe, our personalized styling consultations will ensure you look your best.",
  },
  {
    title: "Custom Designs",
    content:
      "For those who desire a truly unique and personalized touch, we offer custom design services. Work closely with our designers to create bespoke pieces that reflect your individuality and celebrate African heritage in a contemporary way.",
  },
  {
    title: "Fashion Events and Workshops",
    content:
      "Join us for exclusive fashion events and workshops where you can learn about the latest trends, styling tips, and the stories behind our designs. These events provide a unique opportunity to immerse yourself in the world of African contemporary fashion.",
  },
  // {
  //   title: "Increased Profitability",
  //   content:
  //     "By partnering with us, you can enjoy guaranteed rent without the stress of day-to-day property management.",
  // },
  // {
  //   title: " 24/7 Support",
  //   content:
  //     " We provide round-the-clock support for both you and tenants, ensuring that any issues are promptly resolved.",
  // },
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
          Experience the elegance and cultural richness of Itouché n Co. through
          our comprehensive range of services. We are dedicated to making your
          fashion journey as seamless and enjoyable as possible, ensuring you
          always feel stylish, confident, and connected to your heritage.
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
