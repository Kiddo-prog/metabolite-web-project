import React from "react";
import s from "./ContactBanner.module.css";

function TeacherBanner() {
  return (
    <div className={s.bannerCt}>
      <div className={s.bannerCnt}>
        <h3 className={s.bannerCHead}>Contact Us</h3>
      </div>
    </div>
  );
}
export default TeacherBanner;
