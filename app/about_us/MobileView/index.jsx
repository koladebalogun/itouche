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
            <img src="images/ab4.jpg" />
            <div
              className={style.mobile_hero_header1}
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
              Welcome to Itouché n Co., where African fashion meets class. At
              Itouché n Co., we believe in the power of African heritage,
              vibrant culture, and contemporary design to create stunning
              fashion statements that resonate with elegance and sophistication.
              Our mission is to celebrate African roots while offering a modern
              twist, ensuring you stand out with style and grace.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              Our Vision:
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              To be the epitome of African contemporary fashion, blending
              tradition and innovation seamlessly. We strive to be the go-to
              brand for those who appreciate the richness of African culture and
              the allure of high-class fashion.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              Our Philosophy:
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              "Be African Oriented!" is not just a slogan; it's a way of life.
              We are passionate about creating clothing that not only honors
              African traditions but also speaks to the global citizen. Our
              collections are designed to make you feel confident, empowered,
              and connected to your heritage without the hassle. We won’t stress
              your ‘BRAIN’ – our designs are intuitive, stylish, and easy to
              wear, perfect for any occasion.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              Our Collections:
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Each piece from Itouché n Co. is a masterpiece, carefully crafted
              with attention to detail and an unwavering commitment to quality.
              From vibrant prints and bold patterns to elegant silhouettes and
              luxurious fabrics, our collections are a testament to the beauty
              of African artistry. Whether you're looking for everyday wear or a
              statement piece for a special event, Itouché n Co. has something
              for every fashion-forward individual.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              Our Promise:
            </div>
          </div>
        </div>
        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We are dedicated to providing our customers with an exceptional
              shopping experience. From the moment you explore our collections
              to the time you wear our designs, we ensure that you feel valued,
              satisfied, and proud of your choice. Our team is always here to
              assist you, ensuring that your journey with Itouché n Co. is
              nothing short of extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
