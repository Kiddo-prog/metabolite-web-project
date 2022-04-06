import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

function Card({ article }) {
  return (
    <>
      <div>
        <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
          <a>
            <h3 className={styles.cardHeading}>{article.title}</h3>
          </a>
        </Link>
        <p>{article.description}</p>
      </div>
    </>
  );
}

export default Card;
