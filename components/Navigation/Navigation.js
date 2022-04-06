import React from "react";
import s from "./Navigation.module.css";
import Link from "next/link";

function Navigation() {
  const openMenu = (event) => {
    event.preventDefault();
    console.log("menu opened");
  };
  return (
    <div className={s.navBar}>
      <div className={s.logo}>
        <Link href="/">
          <a>Metabolites</a>
        </Link>
      </div>

      <div className={s.navLink}>
        <Link href="/">
          <a className={`${s.link} ${s.active}`}>home</a>
        </Link>
        <Link href="/courses">
          <a className={s.link}>courses</a>
        </Link>
        <Link href="/teachers">
          <a className={s.link}>teachers</a>
        </Link>
        <Link href="/blog">
          <a className={s.link}>blog</a>
        </Link>
        <Link href="/about">
          <a className={s.link}>about</a>
        </Link>
        {/* <Link href="/contact">
          <a className={s.link}>contact</a>
        </Link> */}
      </div>
      <div className={s.MenuBar} onClick={openMenu}></div>
    </div>
  );
}

export default Navigation;
