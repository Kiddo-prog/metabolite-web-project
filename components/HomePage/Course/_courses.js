import React from "react";
import Link from "next/link";

import s from "./Courses.module.css";

function Course({ data }) {
  return (
    <div className={s.crsB}>
      <div data-aos="fade-bottom" data-aos-easing="ease-in">
        <h1 className={s.crsheading}>Our Courses</h1>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-in-out">
        <h2 className={s.crspgh}>Below are courses offered this semester</h2>
      </div>

      <div className={s.crsScnt}>
        {data.map((d, i) => (
          <div key={`${d.name}-${i}`} className={s.crsCnt}>
            <Link href="/courses">
              <a>
                <h2 className={s.crsName}>{d.name}</h2>
                <h3 className={s.crsText}>{d.code}</h3>{" "}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <div data-aos="fade-right">
          <Link href="/courses">
            <a className={s.crsMore}>view more</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
