"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { openMenu, closeMenu } from "@/animations/menuAnimations";
import Link from "next/link";
import Navigation from "../Navigation";
import Image from "next/image";

const index = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
          <Image src={"/images/logo.png"} width={150} height={100} alt="logo" />
            <Link href="/">SOGA PROPERTY SOLUTIONS</Link>
          </div>

          <div className={styles.nav_toggle}>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
