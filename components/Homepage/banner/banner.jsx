import {useEffect, useRef} from "react";
// import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import styles from './style.module.css'
import gsap from "gsap";

let tl = gsap.timeline();

const Banner = () => {
  const textRef = useRef()

  useEffect(() => {
    tl.from(textRef.current, 1.8, {
      opacity: 0,
      y: 100,
      ease: "power1.inOut",
    })
  }, [])
  
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h2 className={styles.gold_text} ref={textRef}>
            <div className="line">
              <span>Welcome to</span>
            </div>
            <div className="line">
              <span>SOGA Property Solutions</span>
            </div>
          </h2>
          {/* <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
