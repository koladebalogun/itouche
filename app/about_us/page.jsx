"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateOne = ({ src, quote, description }) => {
  return (
    <div className={styles.testimonial_section}>
      <div className={styles.testimonial_container}>
        <div className={styles.inner}>
          <div
            className={styles.t_image}
            data-aos="fade-up-left"
            
          >
            <ul>
              <li>
                <img src={`images/${src}`} />
              </li>
            </ul>
          </div>

          <div className={styles.t_content}>
            <ul>
              <li>
                <div className={styles.content_inner} data-aos="fade-up-right">
                  <p
                    className={styles.quote}
                    // data-scroll
                    // data-scroll-speed="0.7"
                  >
                    {quote}
                  </p>
                  <h3 className={styles.name}>{description}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateTwo = ({ src, quote, description }) => {
  return (
    <div className={styles.testimonial_section}>
      <div className={styles.testimonial_container}>
        <div className={styles.inner}>
          <div className={styles.t_content} data-aos="fade-up-right">
            <ul>
              <li>
                <div className={styles.content_inner}>
                  <p
                    className={styles.quote}
                    data-scroll
                    data-scroll-speed="0.7"
                  >
                    {quote}
                  </p>
                  <h3 className={styles.name}>{description}</h3>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.t_image2} data-aos="fade-up-left">
            <ul>
              <li>
                <img
                  src={`/images/${src}`}
                  data-scroll
                  data-scroll-speed="0.2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <TemplateOne
        src={"s3.jpg"}
        quote={"About Us"}
        description={
          "At Soga Property Solutions, we're committed to providing property owners with an exceptional and stress-free property management experience, driven by our core values of Integrity, Respect, Reliable service, and Kindness."
        }
      />

      <div className={styles.subheader}>
        <h2>Why Choose Soga Property Solutions:</h2>
      </div>

      <TemplateTwo
        
        src={"banner.webp"}
        quote={"INTEGRITY"}
        description={
          "Our foundation is built on unwavering integrity. We believe in transparent and ethical business practices, ensuring that your property is managed with the utmost honesty and professionalism."
        }
      />

      <TemplateOne
        src={"s1.jpg"}
        quote={"RESPECT"}
        description={
          "We respect your property as if it were our own. Our dedicated team treats both property owners and tenants with the respect they deserve, fostering positive and lasting relationships."
        }
      />

      <TemplateTwo
        src={"s2.jpg"}
        quote={"RELIABLE SERVICE"}
        description={
          "You can rely on us to manage every aspect of your property effectively, we offer dependable solutions that give you peace of mind."
        }
      />

      <TemplateOne
        src={"s5.jpg"}
        quote={"KINDNESS"}
        description={
          "We understand that property management is not just about bricks and mortar, it's about people. Our friendly and compassionate approach ensures that everyone involved in the process feels valued and appreciated."
        }
      />

      <div className={styles.sub_content}>
        <p>
          At Soga Property Solutions, we believe that our commitment to these
          values sets us apart in the industry. When you choose us as your
          property management partner, you're choosing a team that is dedicated
          to upholding these principles in every interaction and decision.
          <br />
          <br />
          We invite you to explore our services and discover how we can help you
          maximize your rental income while enjoying a stress-free property
          ownership experience.
          <br />
          <br />
          Contact us today to discuss how Soga Property Solutions can tailor our
          services to meet your unique property management needs. We look
          forward to working with you to ensure your property remains a valuable
          and well-cared-for asset.
        </p>
      </div>
    </div>
  );
};

export default page;
