import React from "react";
import { CourseLoader } from "../LoadingPage/LoadingPage";
import s from "./CoursePage.module.css";

function CoursePage({ course, elective }) {
  return (
    <div className={s.CourseSCnt}>
      <div>
        <div className={s.CoursePnt} data-aos="fade-down">
          <h2>Our Courses</h2>
          <p>These are courses offered this semester</p>
        </div>

        <div data-aos="fade-right">
          <h2 className={s.CourseHeadTwo}>Compulsory</h2>
        </div>

        <div className={s.CourseCnt}>
          {course ? (
            course.map((c, i) => (
              <div
                key={`${s.name}-${i}`}
                className={s.CourseFnt}
                data-aos="fade-right"
              >
                <h3>{c.name}</h3>
                <h4>{c.code}</h4>
                <p>{c.grade}</p>
                <p>{c.units}</p>
              </div>
            ))
          ) : (
            <CourseLoader />
          )}
        </div>
      </div>

      <div data-aos="fade-right">
        <h2 className={s.CourseHeadTwo}>Elective</h2>
      </div>
      <div className={s.CourseCnt}>
        {elective ? (
          elective.map((d, i) => (
            <div
              key={`${s.name}-${i}`}
              className={s.CourseFnt}
              data-aos="fade-left"
            >
              <h3>{d.name}</h3>
              <h4>{d.code}</h4>
              <p>{d.grade}</p>
              <p>{d.units}</p>
            </div>
          ))
        ) : (
          <CourseLoader />
        )}
      </div>
    </div>
  );
}

export default CoursePage;
