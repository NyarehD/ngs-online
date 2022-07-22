import React from "react";
import { useState } from "react";
import Headerstyle from "./nav.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";


function Nav() {
  const [fix, setFix] = useState(false);

  const setFixedSidebar = () => {
    if (window.scrollY >= 65) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixedSidebar);
  return (
    <div>
      <div className={Headerstyle.header}>
        <h5>
          <strong>
            Welcome to our site! Check our services and gain success!
          </strong>
        </h5>
        <div className={Headerstyle.register}>
          <li >
            <a href="/login">
              <FontAwesomeIcon icon={faUser} className={Headerstyle.icon} />
              LOGIN
            </a>
          </li>
          <div className={Headerstyle.icons}>
            <span className={Headerstyle.faFacebookF}>
              {" "}
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </span>
            <span className={Headerstyle.faTwitter}>
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className={Headerstyle.faGoogle}>
              {" "}
              <FontAwesomeIcon icon={faGoogle} />
            </span>
          </div>
        </div>
      </div>

      <div className={Headerstyle.logo}>
        <div
          className={
            fix
              ? `${Headerstyle.LogoName} ${Headerstyle.stickyBar}`
              : `${Headerstyle.LogoName}`
          }
        >
          <span>
            <strong>VS</strong>group
          </span>
        </div>

        <div className={Headerstyle.location}>
          <div className={Headerstyle.hours}>
            <div className={Headerstyle.icon}>
              <FontAwesomeIcon
                className={Headerstyle.faLocationDot}
                icon={faLocationDot}
              />
            </div>
            <div>
              <h2>Open Hours</h2>
              <p>Mon-Fri: 9-17; Sat: 9-20, Sun: Off</p>
            </div>
          </div>

          <div className={Headerstyle.address}>
            <div className={Headerstyle.icon}>
              <FontAwesomeIcon className={Headerstyle.faPhone} icon={faPhone} />
            </div>
            <div>
              <h2>+959-123456789</h2>
              <p>Some Street, 123, Your City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
