import React, { useState, useContext } from "react";
import { Context } from "../../../App";
import image0 from "../../../assets/about/about.jpg";
import image from "../../../assets/team_slide_01.jpg";
import image2 from "../../../assets/team_slide_02.jpg";
import image3 from "../../../assets/team_slide_03.jpg";
import image4 from "../../../assets/team_slide_04.jpg";
import icon1 from "../../../assets/icon/icon1.jpg";
import icon2 from "../../../assets/icon/icon2.jpg";
import icon3 from "../../../assets/icon/icon3.jpg";
import icon4 from "../../../assets/icon/icon4.jpg";
import icon5 from "../../../assets/icon/icon5.jpg";
import icon6 from "../../../assets/icon/icon6.jpg";
import aboutStyles from "./about.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"
import {useSpring, animated} from "react-spring"

import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";

function About(aboutContent) {
  const [value] = useContext(Context)
  const data = aboutContent.aboutContent;
  const information = [
    {
      id: "01",
      title: "ABOUT VERTICAL SOLUTIONS",
      name: "Web Service Company In Country",
      service: "We expertise in All Web Design and Development!",
      img: image0,

      service_lists: [
        {
          id: 1,
          serv_title: "Web Development",
        },
        {
          id: 2,
          serv_title: " E-commerce Solutions",
        },
        {
          id: 3,
          serv_title: " Mobile App Development",
        },
        {
          id: 4,
          serv_title: "Desktop Applications",
        },
        {
          id: 5,
          serv_title: " Custom Software Development",
        },
        {
          id: 6,
          serv_title: "Responsive Web Designings",
        },
      ],
    },
  ];

  const fadeUp=useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y:0 },
    delay: 500
  });
  const content = information.map((info , index) => {
    return (
      <animated.div key={index} className={aboutStyles.container} style={fadeUp}>
        <div className={aboutStyles.about_info}>
          <div className={aboutStyles.about_image}>
            <img className={aboutStyles.about_image_img} src={info.img} alt="" />
          </div>
          {console.log()}
          <div className={`${aboutStyles.item_content} ${value.mode === 'dark' ? aboutStyles.darkTheme:''}`}>
            <h4
              className={
                value.mode === "dark"
                  ? aboutStyles.content_titleDark
                  : aboutStyles.content_titleLight
              }
            >
              {info.title}
            </h4>
            <h1 className={aboutStyles.content_name}>{info.name}</h1>
            <h3 className={aboutStyles.content_service}>{info.service}</h3>
            {/* <p className={aboutStyles.content_description}>
                        {info.description} 
                    </p> */}
            <div className={aboutStyles.content_list}>
              <ul className={aboutStyles.service_lists}>
                {info.service_lists.map((serv , index) => {
                  return <li key={index} className={`${aboutStyles.service_list} ${value.mode === "dark" ? aboutStyles.darkTheme : ""}`}>{serv.serv_title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    );
  });

  const cards = [
    {
      photo: icon1,
      title: "GIFT SERTIFICATE",
      text: "Certificates for payment of services and equipment",
    },
    {
      photo: icon2,
      title: "DOUBLE SPEED",
      text: "Magna aliquyam erat, sed diam voluptua at vero eos et accusam",
    },
    {
      photo: icon3,
      title: "IP ADDRESS",
      text: "Additional static IP address vero eos et accusam et justo duo",
    },
    {
      photo: icon4,
      title: "CABLE INSURANCE",
      text: "Three free call wizard to repair the cable in the apartment",
    },
    {
      photo: icon5,
      title: "ROUTER SETUP",
      text: "Call a specialist to configure the router for free lifetime",
    },
    {
      photo: icon6,
      title: "HOT RESERVE",
      text: "Redundant connectivity to Lanet and switch port",
    },
  ];
  const cardItems = cards.map((card , index) => (
    <div key={index} className={aboutStyles.card}>
      <div className={aboutStyles.image}>
        <img src={card.photo} alt="icon" />
      </div>

      <div className={aboutStyles.card_title}>
        <h3>{card.title}</h3>
      </div>

      <p >{card.text}</p>
    </div>
  ));

  return (
    <div>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}>
                <NavLink to="/about" className={HeaderStyle.link}>
                  {data.firstBreakCrumb}
                </NavLink>
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

      <section
        className={aboutStyles.about_intro}
      >
        {content}
      </section>

      <div>
        <div className={aboutStyles.cards}>{cardItems}</div>
      </div>

      <div className={aboutStyles.imageBox}>
        <img className={aboutStyles.imageBox_img} src={image} alt="" id="image" />
        <div className={aboutStyles.name}>
          <ul>
            <li
              onClick={() => {
                document.getElementById("image").src = image;
              }}
            >
              <h1>
                Ronald May <span className={aboutStyles.role}>Founder</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image2;
              }}
            >
              <h1>
                Natalie Thomas <span className={aboutStyles.role}>Trader</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image3;
              }}
            >
              <h1>
                Frank Farjado <span className={aboutStyles.role}>Manager</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image4;
              }}
            >
              <h1>
                Helen Freeman <span className={aboutStyles.role}>Support</span>
              </h1>
            </li>
          </ul>
        </div>
        <span className={aboutStyles.ourTeam}>OurTeam</span>
      </div>
    </div>
  );
}

export default About;
