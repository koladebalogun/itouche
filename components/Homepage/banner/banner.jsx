import {useEffect, useRef} from "react";
import styles from './style.module.css'
import gsap from "gsap";
import Image from "next/image";

let tl = gsap.timeline();

const Banner = () => {
  
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>ITOUCHE COLLECTIBLES</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
