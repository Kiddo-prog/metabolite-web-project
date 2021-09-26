import React from "react";
import s from "./Teacher.module.css";

function TeacherPage({ data }) {
  return (
    <div>
      <div className={s.TCnt}>
        {data.map((d, i) => (
          <div key={`${d.name}-${i}`}>
            <h4 className={s.TPos}>{d.position}</h4>
            <h3 className={s.THead}>{d.name}</h3>
            <p className={s.TField}>{d.field}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherPage;
