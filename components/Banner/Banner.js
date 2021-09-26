import React from "react";
import s from "./Banner.module.css";

export function Banner() {
  return (
    <div className={s.bannerSCnt}>
      <div className={s.bannerCnt}>
        <p className={s.bannerP}>Knowledge is one of the key to success</p>
      </div>
    </div>
  );
}

export function TeacherBanner() {
  return (
    <div className={s.bannerTch}>
      <div className={s.bannerTCnt}>
        <h3 className={s.bannerTHead}>Faculty of Science</h3>
        <p className={s.bannerTP}>Department of Biochemistry</p>
      </div>
    </div>
  );
}
