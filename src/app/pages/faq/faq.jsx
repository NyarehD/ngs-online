import React from "react";
import { useState } from "react";
import style from "./faq.module.sass";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import HeaderStyle from '../../../core/components/header/header.module.sass'
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Link } from "react-router-dom";

const MyFaq = (faqContent) => {
  const data = faqContent.faqContent
  const [index, setIndex] = useState(0);

  const QAA = [
    {
      Q: "  Ex ratione and consectetur laborum suscipit, incidunt and consequuntur? ",
      A: " Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi. ",
    },
    {
      Q: " Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium? ",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What industries do you specialize in?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " Can you guarantee that our plan will raise capital?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " Why should we hire a consultant to write our business plan?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What makes your business plans so special?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What makes your financial projections special?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " How does the process work?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
  ];
  const QAA1 = [
    {
      Q: " What does Your Company Consulting do? ",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What industries do you specialize in?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " Can you guarantee that our plan will raise capital?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " Why should we hire a consultant to write our business plan?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What makes your business plans so special?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " What makes your financial projections special?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
    {
      Q: " How does the process work?",
      A: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a semper ante, eu finibus diam. Sed mauris velit, sagittis eget tincidunt tincidunt, accumsan ac tellus. Sed vulputate, purus eget venenatis tincidunt, lorem lorem maximus risus, facilisis scelerisque est metus eget justo. Etiam vestibulum felis sit amet porta egestas.  ",
    },
  ];

  const QAndA = QAA.map((e) => (
    <div key={e.Q} className={style.card}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{e.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">{e.A}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  const QAndA1 = QAA1.map((w) => (
    <div key={w.Q} className={style.card}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{w.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">{w.A}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  return (
    <>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}><Link type="button" to={"/faq"} className={HeaderStyle.link}>{data.firstBreakCrumb}</Link></li>
              <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
              <li className={HeaderStyle.breakCrumbList} >{data.secondBreakCrumb}</li>
            </ol>
          </div>
        </div>
      </section>

      <div className={style.faqCon}>
        <ul className={style.faqBtnGp}>
          <li
            className={`${
              index === 0 ? `${style.active}` : `${style.btnItem}`
            }`}
            onClick={() => setIndex(0)}
          >
            <div className={style.btnLink} id="tab01">
              User interface
            </div>
          </li>
          <li
            className={`${
              index === 1 ? `${style.active}` : `${style.btnItem}`
            }`}
            onClick={() => setIndex(1)}
          >
            <div className={style.btnLink} id="tab02">
              Payment Method
            </div>
          </li>
          <li
            className={`${
              index === 2 ? `${style.active}` : `${style.btnItem}`
            }`}
            onClick={() => setIndex(2)}
          >
            <div className={style.btnLink} id="tab03">
              System Solution
            </div>
          </li>
          <li
            className={`${
              index === 3 ? `${style.active}` : `${style.btnItem}`
            }`}
            onClick={() => setIndex(3)}
          >
            <div className={style.btnLink} id="tab04">
              Technical Support
            </div>
          </li>
        </ul>

        <div className={style.cardCon}>
          <div className={style.tabContent} hidden={index !== 0}>
            {QAndA}
          </div>
          <div className={style.tabContent} hidden={index !== 1}>
            {QAndA1}
          </div>
          <div className={style.tabContent} hidden={index !== 2}>
            {QAndA1}
          </div>
          <div className={style.tabContent} hidden={index !== 3}>
            {QAndA}
          </div>
        </div>
      </div>

      <div className={style.contactCon}>
        <h1 className={style.askTitle}>Ask Any Question</h1>
        <form>
          <div className={style.form_input_container2}>
            <input
              className={style.form_input2}
              type="text"
              placeholder="FULL NAME"
            />
            <input
              className={style.form_input2}
              type="text"
              placeholder="PHONE NUMBER"
            />
          </div>
          <div className={style.form_input_container2}>
            <input
              className={style.form_input2}
              type="text"
              placeholder="EMAIL"
            />
            <input
              className={style.form_input2}
              type="text"
              placeholder="SUBJECT"
            />
          </div>
          <div className={style.form_input_container2}>
            <textarea
              className={style.form_textarea2}
              cols="30"
              rows="10"
              placeholder="YOUR MESSAGE"
            />
          </div>

          <button
            className={style.form_button2}
            onClick={(e) => {
              e.preventDefault();
            }}
          ></button>
        </form>
      </div>
    </>
  );
};

export default MyFaq;


{/* <ul>
          <li
            className={`${index === 0 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(0)}
          >
            <Link type="button" to={"/"} >Home</Link>
          </li>
          <li
            className={`${index === 1 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(1)}
          >
            <Link type="button" to={"/team-list"}>Team</Link>
          </li>
          <li
            className={`${index === 2 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(2)}
          >
            <Link type="button" to={"/event-list"}>Event</Link>
          </li>
          <li
            className={`${index === 3 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(3)}
          >
            <Link type="button" to={"/about"}>About</Link>
          </li>
          <li
            className={`${index === 4 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(4)}
          >
            <Link type="button" to={"/contact"}>Contact</Link>
          </li>
          <li
            className={`${index === 5 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(5)}
          >
            <Link type="button" to={"/blog"}>Blog</Link>
          </li>
          <li
            className={`${index === 6 ? `${Style.navActive}` : ``}`}
            onClick={() => setIndex(6)}
          >
            <Link type="button" to={"/faq"} >Faq</Link>
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
                <a href="/gallery">GALLERY</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/term-of-use">TERM OF USE</a>
              </MenuItem>
            </Menu>
          </li>
        </ul> */}
