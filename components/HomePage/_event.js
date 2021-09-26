import React from "react";
import s from "./HomePage.module.css";
import Link from "next/link";

function Blogs({ data }) {
  // const event = { ...props };
  return (
    <div className={s.blogSCnt}>
      <div className={s.blogCnt}>
        <h2 className={s.blogHeading}>blogs &amp; events</h2>
        <p className={s.blogP}>
          Here are some events going on around the school campus and within
          Department
        </p>
        <div className={s.blogPt}>
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`} className={s.blogBg}>
              <h3 className={s.blogHt}>{d.title}</h3>
              <p className={s.blogPnt}>{d.details}</p>
              <Link href="/blog">
                <a className={s.blogLnk}>Read More</a>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/blog">
          <a className={s.blogBtn}>More</a>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
