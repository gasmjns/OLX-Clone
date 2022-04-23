import classes from "./ScrollToTopBtn.module.css";
import React, { useState, useEffect } from "react";

export default function ScrollToTopBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const visibleStyle = {
    color: "black",
    position: "fixed",
    zIndex: "11",
    top: "14%",
    left: "46%",
    width: "125px",
    height: "33px",
    border: "none",
    borderRadius: "5rem",
    background: "rgb(255, 248, 248)",
    boxShadow: "2px 2px rgb(243, 242, 243)",
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {showTopBtn && (
        <button style={visibleStyle} onClick={goToTop} className={classes.btn}>
          <i className={classes.arrowDown}></i> Back to top
        </button>
      )}
    </React.Fragment>
  );
}
