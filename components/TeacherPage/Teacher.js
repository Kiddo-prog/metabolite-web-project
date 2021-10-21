import React from "react";
import NextImage from "next/image";
import s from "./Teacher.module.css";
import { ImageLoader } from "../LoadingPage/LoadingPage";

function TeacherPage({ data }) {
  const orient = {
    height: "200px",
    width: "200px",
  };
  const { height, width } = orient;
  return (
    <div>
      <div className={s.TCnt}>
        {data ? (
          data.map((d, i) => (
            <div key={`${d.name}-${i}`}>
              <NextImage
                src={d.img}
                alt="Lecturer img here"
                height={height}
                width={width}
              />
              <h4 className={s.TPos}>{d.position}</h4>
              <h3 className={s.THead}>{d.name}</h3>
              <p className={s.TField}>{d.field}</p>
            </div>
          ))
        ) : (
          <ImageLoader />
        )}
      </div>
    </div>
  );
}

export default TeacherPage;
