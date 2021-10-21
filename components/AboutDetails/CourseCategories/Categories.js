import React from "react";
import { MoreCategory } from "../../LoadingPage/LoadingPage";
import s from "./Categories.module.css";

function Categories({ data }) {
  return (
    <div className={s.catSCn}>
      <div data-aos="fade-down">
        <h1 className={s.catSHead}>Course Categories</h1>
        <p className={s.catSp}>
          Below are some field in Department of Biochemistry
        </p>
      </div>
      <div className={s.catCn}>
        {data ? (
          data.map((d, i) => (
            <div key={`${d.name}-${i}`} data-aos="fade-up">
              <h3 className={s.catHead}>{d.name}</h3>
              <p className={s.catP}>{d.text}</p>
            </div>
          ))
        ) : (
          <MoreCategory />
        )}
      </div>
    </div>
  );
}

export default Categories;
