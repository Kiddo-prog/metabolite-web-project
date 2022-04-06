import React from "react";
import Image from "next/image";
import s from "./Details.module.css";

function Details({ data }) {
  const orient = {
    height: "200px",
    width: "400px",
  };

  const { height, width } = orient;
  return (
    // Course Details
    <>
      <div>
        <h1 className={s.dtlHead}>About Us</h1>
        <h2
          style={{
            marginLeft: "3em",
            fontSize: "20px",
            fontWeight: "400",
            fontFamily: "sans-serif",
          }}
        >
          Department of Biochemistry
        </h2>
        <div className={s.dtlCnt}>
          <div className={s.dtlImg} data-aos="fade-right">
            {
              <Image
                src={data.img1}
                width={width}
                height={height}
                alt="About Image"
                objectFit="cover"
              />
            }

            {
              <Image
                src={data.img2}
                width={width}
                height={height}
                alt="About Image"
                objectFit="cover"
              />
            }
          </div>
          <div className={s.dtlTxt} data-aos="fade-left">
            <p>{data.paragraph[0]}</p>
            <p>{data.paragraph[1]}</p>
            <p>{data.paragraph[2]}</p>
          </div>
        </div>

        {/* Course Categories */}
        <div className={s.dtlCat}></div>
      </div>

      {/* course Categories */}
      <section></section>
    </>
  );
}

export default Details;
