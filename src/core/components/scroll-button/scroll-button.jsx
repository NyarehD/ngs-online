/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "./scroll-button.module.sass";
import { Context } from "../../../App";


function Scroll() {
  const [{mode}, setValue] = useContext(Context)
  return (
    window.addEventListener("scroll", function () {
      var currScrollPos = window.pageYOffset;

      if (currScrollPos >= 500) {
        document.getElementById("scrollBtn").style.opacity = 1;
        document.getElementById("scrollBtn").style.zIndex = "1";
        document.getElementById("themeBtn").style.bottom = '65px'
      } else {
        document.getElementById("scrollBtn").style.opacity = -1;
        document.getElementById("scrollBtn").style.zIndex = "-1";
        document.getElementById("themeBtn").style.bottom = 0
      }
    }),
    (
      <div>
        <a href="#" className={styles.circle} id="scrollBtn">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
        <button className={styles.themeCircle} id="themeBtn" onClick={prevVal => setValue({...prevVal,mode:mode === 'light'?'dark':'light'})}>
          <FontAwesomeIcon icon={mode === 'light'?faMoon:faSun} />
        </button>
      </div>
    )
  );
}

export default Scroll;
