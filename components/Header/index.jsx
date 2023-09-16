"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { openMenu, closeMenu } from "@/animations/menuAnimations";
import Link from "next/link";
import Navigation from "../Navigation";
import Image from "next/image";

const Index = ({ src, text }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

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
