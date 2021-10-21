import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";
export default function Scroll() {
  const style = {
    fontSize: "30px",
  };
  return (
    <ScrollToTop showUnder={160}>
      <span>
        <FiArrowUpCircle style={style} />
      </span>
    </ScrollToTop>
  );
}
