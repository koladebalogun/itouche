"use client";
import styles from "./style.module.css";
import Link from "next/link";
import Navigation from "../Navigation";
import Image from "next/image";

const Index = ({ src, text }) => {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            {src && (
              <Link href="/">
                <Image
                  src={`/images/${src}`}
                  width={100}
                  height={77}
                  alt="logo"
                />
              </Link>
            )}
            <Link href="/">{text}</Link>
          </div>

          <div className={styles.nav_toggle}>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
