import React from "react";
import s from "./Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className={s.footerCnt}>
        <p className={s.footerP}>
          &copy; {date} Metabolites. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
