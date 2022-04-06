import React from "react";
import Link from "next/link";
import s from "./Banner.module.css";

function Banner() {
  return (
    <div className={s.bannerSCnt}>
      <div className={s.bannerCnt}>
        <p className={s.bannerP}>Knowledge is one of the key to success</p>
        <Link href="/about">
          <a className={s.bannerLink}>Learn More</a>
        </Link>
      </div>
    </div>
  );
}
export default Banner;
