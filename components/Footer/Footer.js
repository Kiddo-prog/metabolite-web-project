import React from "react";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={s.footerCnt}>
        <p className={s.footerP}>
          &copy; 2021 Metabolites. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
