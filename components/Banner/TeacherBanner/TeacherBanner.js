import React from "react";
import s from "./TeacherBanner.module.css";

function TeacherBanner() {
  return (
    <div className={s.bannerTch}>
      <div className={s.bannerTCnt}>
        <h3 className={s.bannerTHead}>Faculty of Science</h3>
        <p className={s.bannerTP}>Department of Biochemistry</p>
      </div>
    </div>
  );
}
export default TeacherBanner;
