import React, { useState, useContext, useEffect } from "react";
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
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import api from "../../../api/mockApi"

import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";

function About(aboutContent) {
  const [value] = useContext(Context);
  const data = aboutContent.aboutContent;
  const [serviceList , setServiceList] = useState([])
  const [cards , setCards] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      const response = await api.get("/about");
      setServiceList(response.data.serviceList)
      setCards(response.data.cards)
    }

    fetchData()
  },[])

  const fadeUp = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 500,
  });

  
  const cardItems = cards.map((card, index) => (
    <div key={index} className={aboutStyles.card}>
      <div className={aboutStyles.image}>
        <img src={card.photo} alt="icon" />
      </div>

      <div className={aboutStyles.card_title}>
        <h3>{card.title}</h3>
      </div>

      <p>{card.text}</p>
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

      <section className={aboutStyles.about_intro}>
        <animated.div
          className={aboutStyles.container}
          style={fadeUp}
        >
          <div className={aboutStyles.about_info}>
            <div className={aboutStyles.about_image}>
              <img
                className={aboutStyles.about_image_img}
                src={image0}
                alt=""
              />
            </div>
            <div
              className={`${aboutStyles.item_content} ${
                value.mode === "dark" ? aboutStyles.darkTheme : ""
              }`}
            >
              <h4
                className={
                  value.mode === "dark"
                    ? aboutStyles.content_titleDark
                    : aboutStyles.content_titleLight
                }
              >
                ABOUT VERTICAL SOLUTIONS
              </h4>
              <h1 className={aboutStyles.content_name}>Web Service Company In Country</h1>
              <h3 className={aboutStyles.content_service}>We expertise in All Web Design and Development!</h3>
              <div className={aboutStyles.content_list}>
                <ul className={aboutStyles.service_lists}>
                  {serviceList.map((serv, index) => {
                    return (
                      <li
                        key={index}
                        className={`${aboutStyles.service_list} ${
                          value.mode === "dark" ? aboutStyles.darkTheme : ""
                        }`}
                      >
                        {serv}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </animated.div>
      </section>

      <div>
        <div className={aboutStyles.cards}>{cardItems}</div>
      </div>

      <div className={aboutStyles.imageBox}>
        <img
          className={aboutStyles.imageBox_img}
          src={image}
          alt=""
          id="image"
        />
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
