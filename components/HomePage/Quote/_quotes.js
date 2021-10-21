import React from "react";
import styles from "./Quotes.module.css";

function Quotes(props) {
  const quotes = { ...props };
  return (
    <div>
      <div className={styles.quoteSCnt}>
        <h2 className={styles.quoteHeading}>inspirational quotes</h2>
        <div className={styles.quoteCnt}>
          <p className={styles.quoteNm}>{quotes.data[0].name}</p>
          <p className={styles.quoteP}>
            <q>{quotes.data[0].author}</q>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
