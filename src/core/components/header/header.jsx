import React, { useState } from "react";
import Style from "./header.module.sass";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [index, setIndex] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const locationPath = useLocation()

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
          fix ? `${Style.container} ${Style.stickyBar}` : `${Style.container}`
        }
      >
        {/* <ul>
          <li
            className={`${index === 0 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(0)}
          >
            <a href="/" >Home</a>
          </li>
          <li
            className={`${index === 1 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(1)}
          >
            <a href="/team-list" >Team</a>
          </li>
          <li
            className={`${index === 2 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(2)}
          >
            <a href="/event-list" >Event</a>
          </li>
          <li
            className={`${index === 3 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(3)}
          >
            <a href="/about" >About</a>
          </li>
          <li
            className={`${index === 4 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(4)}
          >
            <a href="/contact" >Contact</a>
          </li>
          <li
            className={`${index === 5 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(5)}
          >
            <a href="/blog" >Blog</a>
          </li>
          <li
            className={`${index === 6 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(6)}
          >
            <a href="/faq" >Faq</a>
          </li>
          <li>
            <a
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`${index === 1 ? `${Style.navActive}` : ``}`}
              onClick={() => setIndex(1)}
            >
              <MenuItem onClick={handleClose}>
                <a href="/gallery">GALLERY</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/terms-of-use">TERMS OF USE</a>
              </MenuItem>
            </Menu>
          </li>
        </ul> */}

        <ul>
          <li
            onClick={() => setIndex(0)}
          >
            <Link className={`${index === 0 ? `${Style.navActive}` : ``}`} type="button" to={"/"} >Home</Link>
          </li>
          <li
            
            onClick={() => setIndex(1)}
          >
            <Link className={`${index === 1 ? `${Style.navActive}` : ``}`}type="button" to={"/team-list"}>Team</Link>
          </li>
          <li
            
            onClick={() => setIndex(2)}
          >
            <Link className={`${index === 2 ? `${Style.navActive}` : ``}`}type="button" to={"/event-list"}>Event</Link>
          </li>
          <li
            
            onClick={() => setIndex(3)}
          >
            <Link className={`${index === 3 ? `${Style.navActive}` : ``}`}type="button" to={"/about"}>About</Link>
          </li>
          <li
            
            onClick={() => setIndex(4)}
          >
            <Link className={`${index === 4 ? `${Style.navActive}` : ``}`}type="button" to={"/contact"}>Contact</Link>
          </li>
          <li
            
            onClick={() => setIndex(5)}
          >
            <Link className={`${index === 5 ? `${Style.navActive}` : ``}`}type="button" to={"/blog"}>Blog</Link>
          </li>
          <li
            onClick={() => setIndex(6)}
          >
            <Link className={`${index === 6 ? `${Style.navActive}` : ``}`}type="button" to={"/faq"} >Faq</Link>
          </li>
          <li >
            <a 
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={`${(locationPath.pathname === "/gallery" || locationPath.pathname === "/terms-of-use") ? `${Style.navActive}` : ''}`}
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
