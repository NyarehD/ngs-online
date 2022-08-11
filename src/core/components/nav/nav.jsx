import React from "react";
import { useState, useContext } from "react";
import Headerstyle from "./nav.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faPhone,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Context } from '../../../App'

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import mmFlag from "../../../assets/flag/mm.png";
import usFlag from "../../../assets/flag/us.gif";

function Nav() {
  const [value] = useContext(Context)
  const [fix, setFix] = useState(false);
  const [language, setLanguage] = useState("");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  
  

  const setFixedSidebar = () => {
    if (window.scrollY >= 65) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  const myanmarLanguage = () => {
    return (
      <div className={`${Headerstyle.selectContainer} ${value.mode!== 'light' ? Headerstyle.selectContainerDark : ''}`}>
        <img className={Headerstyle.flag} src={mmFlag} alt="Myanmar Flag" />
        <span className={Headerstyle.language}>Myanmar</span>
      </div>
    );
  };

  const englishLanguage = () => {
    return (
      <div className={`${Headerstyle.selectContainer} ${value.mode!== 'light' ? Headerstyle.selectContainerDark : ''}`}>
        <img className={Headerstyle.flag} src={usFlag} alt="US Flag" />
        <span className={Headerstyle.language}>English</span>
      </div>
    );
  };

  

  window.addEventListener("scroll", setFixedSidebar);
  return (
    <div>
      <div className={`${Headerstyle.header} ${value.mode!=='light'?Headerstyle.headerDark:""} `}>
        <h3>
            Welcome to our site! Check our services and gain success!

        </h3>

        <div className={`${Headerstyle.register} ${value.mode === 'dark'?Headerstyle.darkli: ''}`}>
          <FormControl className={Headerstyle.languageButton} sx={{ m: 1, minWidth: "auto" }}>
            <Select
              className={Headerstyle.language}
              value={language}
              onChange={handleChange}
              id="demo-simple-select-autowidth"
              autoWidth
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem className={`${value.mode === "dark" ? Headerstyle.menuItemDark : Headerstyle.menuItem}`} value={"myanmar"}>{myanmarLanguage()}</MenuItem>
              <MenuItem className={`${value.mode === "dark" ? Headerstyle.menuItemDark : Headerstyle.menuItem}`} value={""}>{englishLanguage()}</MenuItem>
            </Select>
          </FormControl>

          <li>
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
              ? `${Headerstyle.LogoName} ${Headerstyle.stickyBar} ${value.mode === 'light' ? '':Headerstyle.dark}`
              : `${Headerstyle.LogoName} ${value.mode === 'light' ? '':Headerstyle.dark}`
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
                className={`${Headerstyle.faLocationDot} ${value.mode === 'dark'?Headerstyle.darkIcon: ''}`}
                icon={faLocationDot}
              />
            </div>
            <div>
              <h2 className={value.mode === 'dark'?Headerstyle.darkText:''}>Open Hours</h2>
              <p className={value.mode === 'dark'?Headerstyle.darkText:''}>Mon-Fri: 9-17; Sat: 9-20, Sun: Off</p>
            </div>
          </div>

          <div className={Headerstyle.address}>
            <div className={Headerstyle.icon}>
              <FontAwesomeIcon className={`${Headerstyle.faPhone} ${value.mode === 'dark'?Headerstyle.darkIcon: ''}`} icon={faPhone} />
            </div>
            <div>
              <h2 className={value.mode === 'dark'?Headerstyle.darkText:''}>+959-123456789</h2>
              <p className={value.mode === 'dark'?Headerstyle.darkText:''}>Some Street, 123, Your City</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          fix
            ? `${Headerstyle.asideMenu} ${Headerstyle.menuOnStickyBar} ${value.mode === 'light' ? '':Headerstyle.dark} `
            : `${Headerstyle.asideMenu} ${value.mode === 'light' ? '':Headerstyle.dark}`
        }
      >
        <FontAwesomeIcon
          icon={faBars}
          className={Headerstyle.open}
          id="open"
          onClick={() => {
            document.getElementById("asidebar").style.display = "block";
            document.getElementById("open").style.display = "none";
            document.getElementById("close").style.display = "block";
          }}
        ></FontAwesomeIcon>
      </div>
      
      <div className={Headerstyle.asideBar} id="asidebar">
        <div className={Headerstyle.closeContainer}>
          <div className={Headerstyle.closeButton}>
            <FontAwesomeIcon
              icon={faX}
              className={Headerstyle.close}
              id="close"
              onClick={() => {
                document.getElementById("asidebar").style.display = "none";
                document.getElementById("open").style.display = "block";
                document.getElementById("close").style.display = "none";
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/event">Event</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/faq">Faq</a>
          </li>
            <Accordion className={Headerstyle.asideAccordion}>
              <AccordionSummary
                className={Headerstyle.asideAccordion}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <li className={Headerstyle.asideOthers}>OTHERS</li>
              </AccordionSummary>
              <AccordionDetails className={Headerstyle.asideAccordion}>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/terms-of-use">Terms Of Use</a>
                </li>
                <li className={Headerstyle.loginSignUp}>
                  <a href="/login">Login</a>
                </li>
                <li className={Headerstyle.loginSignUp}>
                  <a href="/sign-up">Sign up</a>
                </li>
              </AccordionDetails>
            </Accordion>
        </ul>
      </div>
    </div>
  );
}

export default Nav