import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    img: "hp1.jpg",
  },
  {
    id: 2,
    img: "hp2.jpg",
  },
  {
    id: 3,
    img: "hp3.jpg",
  },
];

const Cases = () => {
  return (
    <>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cases;
