"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileView from "./MobileView";
import Header from "../../components/Header";

const TemplateOne = ({ src, quote, description }) => {
  return (
    <div className={styles.testimonial_section}>
      <div className={styles.testimonial_container}>
        <div className={styles.inner}>
          <div className={styles.t_image} data-aos="fade-up-left">
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
    <>
      <Header src={"logo.png"} text={"Soga property solutions"} />
      <div className={styles.wrapper}>
        <TemplateOne
          src={"ab1.jpg"}
          quote={"About Us"}
          description={
            "Welcome to Itouché n Co., where African fashion meets class. At Itouché n Co., we believe in the power of African heritage, vibrant culture, and contemporary design to create stunning fashion statements that resonate with elegance and sophistication. Our mission is to celebrate African roots while offering a modern twist, ensuring you stand out with style and grace."
          }
        />

        {/* <div className={styles.subheader}>
          <h2>Why Choose Soga Property Solutions:</h2>
        </div> */}

        <TemplateTwo
          src={"ab2.jpg"}
          quote={"Our Vision:"}
          description={
            "To be the epitome of African contemporary fashion, blending tradition and innovation seamlessly. We strive to be the go-to brand for those who appreciate the richness of African culture and the allure of high-class fashion."
          }
        />

        <TemplateOne
          src={"ab3.jpg"}
          quote={"Our Philosophy:"}
          description={
            "'Be African Oriented!' is not just a slogan; it's a way of life. We are passionate about creating clothing that not only honors African traditions but also speaks to the global citizen. Our collections are designed to make you feel confident, empowered, and connected to your heritage without the hassle. We won’t stress your ‘BRAIN’ – our designs are intuitive, stylish, and easy to wear, perfect for any occasion."
          }
        />

        <TemplateTwo
          src={"ab4.jpg"}
          quote={"Our Collections:"}
          description={
            "Each piece from Itouché n Co. is a masterpiece, carefully crafted with attention to detail and an unwavering commitment to quality. From vibrant prints and bold patterns to elegant silhouettes and luxurious fabrics, our collections are a testament to the beauty of African artistry. Whether you're looking for everyday wear or a statement piece for a special event, Itouché n Co. has something for every fashion-forward individual."
          }
        />

        {/* <div className={styles.sub_content}>
          <p>
            We are dedicated to providing our customers with an exceptional
            shopping experience. From the moment you explore our collections to
            the time you wear our designs, we ensure that you feel valued,
            satisfied, and proud of your choice. Our team is always here to
            assist you, ensuring that your journey with Itouché n Co. is nothing
            short of extraordinary.
            <br />
            <br />
            Join us in celebrating the fusion of tradition and contemporary
            fashion. Embrace the elegance, embrace the culture, and be African
            Oriented with Itouché n Co.
            <br />
            <br />
            Welcome to the family. Welcome to Itouché n Co.
          </p>
        </div> */}
      </div>
      <MobileView />
    </>
  );
};

export default page;
