import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    subtitle: "Your Dream Home",
    title: "The perfect property solutions of your dreams.",
    img: "img1.webp",
  },
  {
    id: 2,
    subtitle: "Your space",
    title: "Open space floor plans for you next venture",
    img: "img2.webp",
  },
  {
    id: 3,
    subtitle: "Your Property, Our Expertise",
    title: "Find the best solutions for your property journey",
    img: "s3.jpg",
  },
];

const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.container_fluid}>
        {/* <div className={styles.cases_navigation}>
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div> */}
        <div className={styles.row}>
          {caseStudies.map((caseItem) => (
            <div className={styles.case} key={caseItem.id}>
              <div className={styles.case_details}>
                <span>{caseItem.subtitle}</span>
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
