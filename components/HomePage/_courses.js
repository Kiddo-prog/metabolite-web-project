import React from "react";
import s from "./HomePage.module.css";
import Link from "next/link";

function Course({ data }) {
  return (
    <div className={s.crsB}>
      <h2 className={s.crsheading}>Our Courses</h2>
      <p className={s.crspgh}>Below are courses offered this semester</p>
      <div className={s.crsScnt}>
        {data.map((d, i) => (
          <div key={`${d.name}-${i}`} className={s.crsCnt}>
            <h2 className={s.crsName}>{d.name}</h2>
            <p className={s.crsText}>{d.text}</p>{" "}
          </div>
        ))}
      </div>
      <div>
        <Link href="/courses">
          <a className={s.crsMore}>view more</a>
        </Link>
      </div>
    </div>
  );
}

export default Course;
