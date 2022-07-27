import React from "react";
import { useState, useContext } from "react";
import style from "./faq.module.sass";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Link } from "react-router-dom";
import { Context } from "../../../App";

const MyFaq = (faqContent) => {
  const [value, setValue] = useContext(Context);
  const data = faqContent.faqContent;
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
              <li className={HeaderStyle.breakCrumbList}>
                <Link type="button" to={"/faq"} className={HeaderStyle.link}>
                  {data.firstBreakCrumb}
                </Link>
              </li>
              <li className={HeaderStyle.breakCrumbList}>
                <FontAwesomeIcon
                  className={HeaderStyle.icon}
                  icon={faAngleRight}
                ></FontAwesomeIcon>
              </li>
              <li className={HeaderStyle.breakCrumbList}>
                {data.secondBreakCrumb}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className={style.faqCon}>
        <ul className={style.faqBtnGp}>
          <li
            className={`${
              index === 0
                ? `${style.active}`
                : `${
                    value.mode === "light" ? style.btnItem : style.btnItemDark
                  }`
            }`}
            onClick={() => setIndex(0)}
          >
            <div className={style.btnLink} id="tab01">
              User interface
            </div>
          </li>
          <li
            className={`${
              index === 1
                ? `${style.active}`
                : `${
                    value.mode === "light" ? style.btnItem : style.btnItemDark
                  }`
            }`}
            onClick={() => setIndex(1)}
          >
            <div className={style.btnLink} id="tab02">
              Payment Method
            </div>
          </li>
          <li
            className={`${
              index === 2
                ? `${style.active}`
                : `${
                    value.mode === "light" ? style.btnItem : style.btnItemDark
                  }`
            }`}
            onClick={() => setIndex(2)}
          >
            <div className={style.btnLink} id="tab03">
              System Solution
            </div>
          </li>
          <li
            className={`${
              index === 3
                ? `${style.active}`
                : `${
                    value.mode === "light" ? style.btnItem : style.btnItemDark
                  }`
            }`}
            onClick={() => setIndex(3)}
          >
            <div className={style.btnLink} id="tab04">
              Technical Support
            </div>
          </li>
        </ul>

        <div
          className={value.mode === "light" ? style.cardCon : style.cardConDark}
        >
          <div
            className={
              value.mode === "light" ? style.tabContent : style.tabContentDark
            }
            hidden={index !== 0}
          >
            {QAndA}
          </div>
          <div
            className={
              value.mode === "light" ? style.tabContent : style.tabContentDark
            }
            hidden={index !== 1}
          >
            {QAndA1}
          </div>
          <div
            className={
              value.mode === "light" ? style.tabContent : style.tabContentDark
            }
            hidden={index !== 2}
          >
            {QAndA1}
          </div>
          <div
            className={
              value.mode === "light" ? style.tabContent : style.tabContentDark
            }
            hidden={index !== 3}
          >
            {QAndA}
          </div>
        </div>
      </div>

      <div className={style.contactCon}>
        <h1
          className={
            value.mode === "light" ? style.askTitle : style.askTitleDark
          }
        >
          Ask Any Question
        </h1>
        <form>
          <div className={style.form_input_container2}>
            <input
              className={
                value.mode === "light"
                  ? style.form_input2
                  : style.form_input2Dark
              }
              type="text"
              placeholder="FULL NAME"
              required="required"

            />
            <input
              className={
                value.mode === "light"
                  ? style.form_input2
                  : style.form_input2Dark
              }
              type="text"
              placeholder="PHONE NUMBER"
              required="required"
            />
          </div>
          <div className={style.form_input_container2}>
            <input
              className={
                value.mode === "light"
                  ? style.form_input2
                  : style.form_input2Dark
              }
              type="email"
              placeholder="EMAIL"
              required="required"

            />
            <input
              className={
                value.mode === "light"
                  ? style.form_input2
                  : style.form_input2Dark
              }
              type="text"
              placeholder="SUBJECT"
              required="required"

            />
          </div>
          <div
            className={
              value.mode === "light"
                ? style.form_input_container2
                : style.form_input_container2Dark
            }
          >
            <textarea
              className={
                value.mode === "light"
                  ? style.form_textarea2
                  : style.form_textarea2Dark
              }
              cols="30"
              rows="10"
              placeholder="YOUR MESSAGE"
              required="required"
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
