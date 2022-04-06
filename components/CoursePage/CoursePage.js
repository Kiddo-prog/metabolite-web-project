import React from "react";
import s from "./CoursePage.module.css";

function CoursePage({ course, elective }) {
  return (
    <div className={s.CourseSCnt}>
      <div>
        <div className={s.CoursePnt} data-aos="fade-up">
          <h2>Our Courses</h2>
          <p>These are courses offered this semester</p>
        </div>

        <div data-aos="fade-right">
          <h2 className={s.CourseHeadTwo}>Compulsory</h2>
        </div>

        <div className={s.CourseCnt}>
          {course.map((c, i) => (
            <div
              key={`${s.name}-${i}`}
              className={s.CourseFnt}
              data-aos="fade-up"
            >
              <h3>{c.name}</h3>
              <h4>{c.code}</h4>
              <p>{c.grade}</p>
              <p>{c.units}</p>
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-right">
        <h2 className={s.CourseHeadTwo}>Elective</h2>
      </div>
      <div className={s.CourseCnt}>
        {elective.map((d, i) => (
          <div
            key={`${s.name}-${i}`}
            className={s.CourseFnt}
            data-aos="fade-up"
          >
            <h3>{d.name}</h3>
            <h4>{d.code}</h4>
            <p>{d.grade}</p>
            <p>{d.units}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
