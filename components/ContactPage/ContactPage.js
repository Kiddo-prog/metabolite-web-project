import React, { useState } from "react";
import styles from "./ContactPage.module.css";
// import Dues from "../Fees/Fees";
import Link from "next/link";

function ContactPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    setName(([e.target.name] = e.target.value));
  };

  return (
    <>
      <div>
        <h1 className={styles.formHeading}>Contact Us</h1>
        <form className={styles.formContainer}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="email" className={styles.formLabel}>
            Email:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="message" className={styles.formLabel}>
            Message:{" "}
          </label>
          <textarea
            cols="40"
            rows="10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <input type="submit" value="Message Us" className={styles.btn} />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Haven't paid class dues, Click here to
        <Link href="/payment" as="dues/payment">
          <a
            style={{
              color: "#a0a1f6",
            }}
          >
            Pay Dues
          </a>
        </Link> */}
      </div>
    </>
  );
}

export default ContactPage;
