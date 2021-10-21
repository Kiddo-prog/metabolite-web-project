import React, { useEffect } from "react";
import s from "./Events.module.css";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

function Blogs({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={s.blogSCnt}>
      <div className={s.blogCnt}>
        <div data-aos="fade-down">
          <h2 className={s.blogHeading}>blogs &amp; events</h2>
        </div>

        <div data-aos="fade-up">
          <p className={s.blogP}>
            Here are some events going on around the school campus and within
            Department
          </p>
        </div>
        <div className={s.blogPt}>
            {data.map((d, i) => (
              <div data-aos="fade-up" key={`${d.title}-${i}`} className={s.blogBg}>
                <h3 className={s.blogHt}>{d.title}</h3>
                <p className={s.blogPnt}>{d.details}</p>
                <Link href="/blog">
                  <a className={s.blogLnk}>Read More</a>
                </Link>
              </div>
            ))}
        </div>

        <div data-aos="fade-right">
          <Link href="/blog">
            <a className={s.blogBtn}>More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
