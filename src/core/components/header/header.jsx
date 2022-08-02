import React, { useState, useContext } from "react";
import Style from "./header.module.sass";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../../App";


function Header() {
  const [index, setIndex] = useState("");
  const [value] = useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const locationPath = useLocation();

  const [fix, setFix] = useState(false);

  const setFixedSidebar = (index) => {
    if (window.scrollY >= 180) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixedSidebar);
  

  return (
    <>
      <hr />
      <div
        className={
          fix
            ? `${Style.container} ${Style.stickyBar} ${
                value.mode !== "light" ? Style.containerDark : ""
              }`
            : `${Style.container} ${
                value.mode !== "light" ? Style.containerDark : ""
              }`
        }
      >
        <ul>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/" ? `${Style.navActive}` : ""
              }`}
              type="button"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/team-list"
                  ? `${Style.navActive}`
                  : ""
              }`}
              type="button"
              to={"/team-list"}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/event-list"
                  ? `${Style.navActive}`
                  : ""
              }`}
              type="button"
              to={"/event-list"}
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/about" ? `${Style.navActive}` : ""
              }`}
              type="button"
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/contact" ? `${Style.navActive}` : ""
              }`}
              type="button"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li onClick={() => setIndex(5)}>
            <Link
              className={`${
                locationPath.pathname === "/blog" ? `${Style.navActive}` : ""
              }`}
              type="button"
              to={"/blog"}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname === "/faq" ? `${Style.navActive}` : ""
              }`}
              type="button"
              to={"/faq"}
            >
              Faq
            </Link>
          </li>
          <li>
            <a
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={`${
                locationPath.pathname === "/gallery" ||
                locationPath.pathname === "/terms-of-use"
                  ? `${Style.navActive}`
                  : ""
              }`}
            >
              OTHERS
            </a>
            <Menu
            className={
              fix
                ? `${Style.menu} ${Style.stickyBar} ${
                    value.mode !== "light" ? Style.menuDark : ""
                  }`
                : `${Style.menu} ${
                    value.mode !== "light" ? Style.menuDark : ""
                  }`
            }
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
              >
                <a href="/gallery">GALLERY</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/terms-of-use">TERM OF USE</a>
              </MenuItem>
            </Menu>
          </li>
        </ul>

        <button className={Style.btnAppointment}></button>
      </div>
    </>
  );
}

export default Header;
