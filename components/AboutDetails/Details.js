import React from "react";
import Image from "next/image";
import s from "./Details.module.css";
import Footer from "../Footer/Footer";

function Details({ data }) {
  return (
    <div>
      <h1 className={s.dtlHead}>About Us</h1>
      <div className={s.dtlCnt}>
        <div className={s.dtlImg}>
          <Image
            src="/assets/bg7.jpg"
            width="400px"
            height="200px"
            alt="About Image"
            objectFit="cover"
          />
          <Image
            src="/assets/bg8.jpg"
            width="400px"
            height="200px"
            alt="About Image"
            objectFit="cover"
          />
        </div>
        <div className={s.dtlTxt}>
          <p>{data.paragraph}</p>
          <p>{data.paragraph}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
