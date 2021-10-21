import React, { useState, useEffect } from "react";
import { MdSegment } from "react-icons/md";
import Link from "next/link";
import styles from "./SideBarMenu.module.css";
import NavItem from "./NavItems/NavItem";

import AOS from "aos";
import "aos/dist/aos.css";

function SideBarMenu() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  let main;
  if (isOpen) {
    main = <NavItem />;
  }
  return (
    <div className={styles.Sidebar_Container}>
      <nav className={styles.Navbar_Container}>
        <div className={styles.Sidebar_Logo}>
          <Link href="/">metabolites</Link>
        </div>
        <div>
          <MdSegment
            className={styles.Sidebar_Menu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </nav>
      {main}
    </div>
  );
}

export default SideBarMenu;
