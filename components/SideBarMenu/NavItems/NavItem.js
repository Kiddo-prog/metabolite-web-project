import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavItem.module.css";
import { MdClose } from "react-icons/md";

function NavItem() {
  const [closeMenu, isCloseMenu] = useState(true);

  return (
    <div className={styles.Nav_Container}>
      <MdClose
        className={styles.Close_Btn}
        onClick={() => isCloseMenu(!closeMenu)}
      />
      <div className={styles.Nav_Bar}>
        <Link href="/">
          <a className={styles.Nav_list}>home</a>
        </Link>
        <Link href="/courses">
          <a className={styles.Nav_list}>courses</a>
        </Link>
        <Link href="/teachers">
          <a className={styles.Nav_list}>teachers</a>
        </Link>
        <Link href="/blog">
          <a className={styles.Nav_list}>blog</a>
        </Link>
        <Link href="/about">
          <a className={styles.Nav_list}>about</a>
        </Link>
        {/* <Link href="/contact">
          <a className={styles.Nav_list}>contact</a>
        </Link> */}
      </div>
    </div>
  );
}

export default NavItem;
