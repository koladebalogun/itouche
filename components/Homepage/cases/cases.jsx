import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Welcome to The Hassle-Free Property Management.",
    img: "img1.webp",
  },
  {
    id: 2,
    title:
      "We specialise in providing property owners like you with a seamless solution",
    img: "img2.webp",
  },
  {
    id: 3,
    title: "We also ensure you receive consistent, guaranteed and rental income.",
    img: "s3.jpg",
  },
];

const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.container_fluid}>
        <div className={styles.row}>
          {caseStudies.map((caseItem) => (
            <div className={styles.case} key={caseItem.id}>
              <div className={styles.case_details}>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <Image src={`/images/${caseItem.img}`} fill={true} />
                {/* <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
