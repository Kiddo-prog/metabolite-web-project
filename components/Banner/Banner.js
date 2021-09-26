import React from "react";
import s from "./Banner.module.css";

function Banner() {
  return (
    <div className={s.bannerSCnt}>
      <div className={s.bannerCnt}>
        <p className={s.bannerP}>Knowledge is one of the key to success</p>
      </div>
    </div>
  );
}
export default Banner;

