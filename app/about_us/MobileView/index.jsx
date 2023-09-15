"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import style from "../page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  return (
    <div className={style.mobileWrapper}>
      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="images/s3.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.2"
            >
              About Us
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll></h3>
            <p>
              At Soga Property Solutions, we're committed to providing property
              owners with an exceptional and stress-free property management
              experience, driven by our core values of Integrity, Respect,
              Reliable service, and Kindness.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="images/banner.webp" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              INTEGRITY
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Our foundation is built on unwavering integrity. We believe in
              transparent and ethical business practices, ensuring that your
              property is managed with the utmost honesty and professionalism.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="images/s1.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              RESPECT
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We respect your property as if it were our own. Our dedicated team
              treats both property owners and tenants with the respect they
              deserve, fostering positive and lasting relationships.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="images/s2.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              RELIABLE SERVICE
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              You can rely on us to manage every aspect of your property
              effectively, we offer dependable solutions that give you peace of
              mind.
            </p>
          </div>
        </div>
      </div>

      <div>images
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="images/s5.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              KINDNESS
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We understand that property management is not just about bricks
              and mortar, it's about people. Our friendly and compassionate
              approach ensures that everyone involved in the process feels
              valued and appreciated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
