import React, { useState } from "react";
import Style from "./header.module.sass";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Header() {
  const [index, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <>
      <div
        className={
          fix ? `${Style.container} ${Style.stickyBar}` : `${Style.container}`
        }
      >
        <ul>
          <li
            className={`${index === 0 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(0)}
          >
            <a>Home</a>
          </li>
          <li
            className={`${index === 1 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(1)}
          >
            <a>Team</a>
          </li>
          <li
            className={`${index === 2 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(2)}
          >
            <a>Event</a>
          </li>
          <li
            className={`${index === 3 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(3)}
          >
            <a>About</a>
          </li>
          <li
            className={`${index === 4 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(4)}
          >
            <a>Contact</a>
          </li>
          <li
            className={`${index === 5 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(5)}
          >
            <a>Blog</a>
          </li>
          <li
            className={`${index === 6 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(6)}
          >
            <a>Faq</a>
          </li>
          <li>
            <a
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              OTHERS
            </a>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="">GALLERY</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="">TERM OF USE</a>
              </MenuItem>
            </Menu>
          </li>
        </ul>
        <button className={Style.btnAppointment}></button>
      </div>
      <div className={Style.asideMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className={Style.open}
          id="open"
          onClick={() => {
            document.getElementById("asidebar").style.display = "block";
            document.getElementById("open").style.display = "none";
            document.getElementById("close").style.display = "block";
          }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faX}
          className={Style.close}
          id="close"
          onClick={() => {
            document.getElementById("asidebar").style.display = "none";
            document.getElementById("open").style.display = "block";
            document.getElementById("close").style.display = "none";
          }}
        ></FontAwesomeIcon>
      </div>
      <div className={Style.asideBar} id="asidebar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Event</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <Accordion className={Style.asideAccordion}>
              <AccordionSummary
                className={Style.asideAccordion}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <li className={Style.asideOthers}>OTHERS</li>
              </AccordionSummary>
              <AccordionDetails className={Style.asideAccordion}>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
                <li className={Style.loginSignUp}>
                  <a href="">Login</a>
                </li>
                <li className={Style.loginSignUp}>
                  <a href="">Sign up</a>
                </li>
              </AccordionDetails>
            </Accordion>
          </li>
        </ul>
      </div>
      <section className={Style.page_title}>
        <div className={Style.bannerContent}></div>
      </section>
    </>
  );
}

export default Header;
