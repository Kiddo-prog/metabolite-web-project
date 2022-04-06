import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";
export default function Scroll() {
  const style = {
    fontSize: "40px",
    backgroundColor: "#000000",
    color: "#ffffff",
  };
  return (
    <ScrollToTop showUnder={200}>
      <span>
        <FiArrowUpCircle style={style} />
      </span>
    </ScrollToTop>
  );
}
