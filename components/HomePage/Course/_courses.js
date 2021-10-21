import React, { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import s from "./Courses.module.css";

function Course({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={s.crsB}>
      <div data-aos="fade-bottom" data-aos-easing="ease-in">
        <h2 className={s.crsheading}>Our Courses</h2>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-in-out">
        <p className={s.crspgh}>Below are courses offered this semester</p>
      </div>

      <div className={s.crsScnt}>
          {data.map((d, i) => (
            <div data-aos="fade-up" key={`${d.name}-${i}`} className={s.crsCnt}>
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

        {/* <BiArchive /> */}
      </div>
    </div>
  );
}

export default Course;
