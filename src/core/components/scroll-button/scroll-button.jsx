/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faAngleUp, faMoon} from "@fortawesome/free-solid-svg-icons";

import styles from "./scroll-button.module.sass";
import {Context} from "../../../App";

function Scroll() {
    const [darkMode, setDarkMode]=useContext(Context)
    function handleDarkMode(event){
        event.preventDefault()
        setDarkMode({...darkMode,mode:darkMode.mode==="light"?"dark":"light"})
    }
  return (
    window.addEventListener("scroll", function () {
      var currScrollPos = window.pageYOffset;

      if (currScrollPos >= 500) {
        document.getElementById("scrollBtn").style.opacity = 1;
        document.getElementById("darkMode").style.opacity=1;
        document.getElementById("scrollBtn").style.zIndex = "1";
        document.getElementById("darkMode").style.zIndex="1";
      } else {
        document.getElementById("scrollBtn").style.opacity = -1;
        document.getElementById("darkMode").style.opacity = -1;
        document.getElementById("scrollBtn").style.zIndex = "-1";
        document.getElementById("darkMode").style.zIndex = "-1";
      }
    }),
    (
          <div className={styles.scrollDiv}>
              <div>
                  <a href="#" className={styles.circle} id="scrollBtn">
                      <FontAwesomeIcon icon={faAngleUp} />
                  </a>
              </div>
              <div>
                  <a href="#" className={styles.darkMode} id="darkMode" onClick={handleDarkMode}>
                      <FontAwesomeIcon icon={faMoon}/>
                  </a>
              </div>
          </div>
    )
  );
}

export default Scroll;
