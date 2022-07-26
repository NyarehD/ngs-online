import React, { useState, useEffect,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import HeaderStyle from '../../../core/components/header/header.module.sass'
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";

import img01 from "../../../assets/team-list/01.jpg";
import img02 from "../../../assets/team-list/02.jpg";
import img03 from "../../../assets/team-list/03.jpg";
import img04 from "../../../assets/team-list/04.jpg";
import img05 from "../../../assets/team-list/05.jpg";
import img06 from "../../../assets/team-list/06.jpg";
import img07 from "../../../assets/team-list/07.jpg";

import teamListStyle from "./team-list.module.sass";
import { Context } from "../../../App";

const teams = [
  {
    id: 1,
    name: "Design",
    team: "design",
  },
  {
    id: 2,
    name: "Frontend",
    team: "frontend",
  },
  {
    id: 3,
    name: "BackendDatabaseQc",
    team: "backend",
  },
  {
    id: 4,
    name: "Mobile",
    team: "mobile",
  },
  {
    id: 5,
    name: "Network",
    team: "network",
  },
];
const designTeam = [
  {
    id: 1,
    name: "Deam Whales",
    role: "Design Team Leader",
    img: img02,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },

  {
    id: 2,
    name: "Jamie Brant",
    role: "SENIOR DESIGNER",
    img: img07,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 3,
    name: "Lesia Travis",
    role: "SENIOR UI/UX DESIGNER",
    img: img01,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
];
const frontendTeam = [
  {
    id: 1,
    name: "Jamie Brant",
    role: "Frontend Team Leader",
    img: img03,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 2,
    name: "Dean Whales",
    role: "Senior Developer",
    img: img02,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 3,
    name: "Jamie Brant",
    role: "MID SENIOR DEVELOPER",
    img: img05,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
];

const backendTeam = [
  {
    id: 1,
    name: "Amelia Brynne",
    role: "BACKEND Team Leader",
    img: img03,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 2,
    name: "Lark Laverne",
    role: "DATABASE MANAGEMENT LEADER",
    img: img04,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 3,
    name: "Jackson Janey",
    role: "DATABASE MANAGEMENT LEADER",
    img: img06,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
  {
    id: 4,
    name: "Lark Laverne",
    role: "DATABASE MANAGEMENT LEADER",
    img: img01,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
];
const mobileTeam = [
  {
    id: 1,
    name: "Lesia Travis",
    role: "MOBILE Team Leader",
    img: img04,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
];
const networtTeam = [
  {
    id: 1,
    name: "Jackson Janey",
    role: "SYSTEM NETWORK ENGINEER",
    img: img05,
    facebook: "facebook",
    twitter: "twitter",
    youtube: "youtube",
    instagram: "instagram",
    detail_link: "#",
  },
];
export default function TeamList(teamListContent) {
  const data = teamListContent.teamListContent
  const [value] = useContext(Context)

  const [teamSelect, setTeamSelect] = useState(designTeam);
  useEffect(() => {
    setTeamSelect((prevTeam) => [
      ...prevTeam,
      ...frontendTeam,
      ...backendTeam,
      ...mobileTeam,
      ...networtTeam,
    ]);
  }, []);

  const Design = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return designTeam.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };
  const Frontend = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return frontendTeam.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };
  const Backend = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return backendTeam.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };

  const Mobile = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return mobileTeam.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };

  const Network = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return networtTeam.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };
  // const changeTeam=(id)=>{
  //     if(id===0){
  //         setTeamSelect([...designTeam,...frontendTeam, ...backendTeam, ...mobileTeam, ...networtTeam])
  //     }else if(id===1){
  //         setTeamSelect(designTeam)
  //     }else if(id===2){
  //         setTeamSelect(frontendTeam)
  //     }else if(id===3){
  //         setTeamSelect(backendTeam)
  //     }else if(id===4){
  //         setTeamSelect(mobileTeam)
  //     }else if(id===5){
  //         setTeamSelect(networtTeam)
  //     }

  // }

  /*team selection*/
  const team = teams.map((team) => {
    return (
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "#0056b3" : value.mode === 'light'? '#000000':'#fff',
            textDecoration: "none",
          };
        }}
        to={`/${team.team}`}
        key={team.id}
        className={`${teamListStyle.links} ${value.mode === 'light'?teamListStyle.lightLink:teamListStyle.darkLink}`}
      >
        {team.name}
      </NavLink>
    );
  });

  /** team display from selectioin */
  const Alldev = () => {
    const transition = useSpring({
      from: { opacity: 0, transform: `scale(0.5)` },
      to: { opacity: 1, transform: " scale(1)" },
      delay: 50,
      config: { duration: 250 },
      leave: { x: 0, y: 0, width: 50, height: 50, opacity: 0 },
    });
    return teamSelect.map((dev) => {
      return (
        <animated.div className={`${teamListStyle.developer} ${value.mode === 'light'?teamListStyle.light:teamListStyle.dark}`} style={transition}>
          <div className={teamListStyle.developer_media}>
            <a href={dev.detail_link}>
              <img src={dev.img} alt="" className={teamListStyle.dev_img} />
              <div className={teamListStyle.hover}></div>
              <div className={teamListStyle.dev_social_icons}>
                <a href={dev.facebook}>
                  <div className={teamListStyle.dev_Facebook}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={teamListStyle.fac_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.twitter}>
                  <div className={teamListStyle.dev_Twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={teamListStyle.twi_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.youtube}>
                  <div className={teamListStyle.dev_Youtube}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={teamListStyle.yout_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
                <a href={dev.instagram}>
                  <div className={teamListStyle.dev_Instagram}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={teamListStyle.ins_icon}
                    ></FontAwesomeIcon>
                  </div>
                </a>
              </div>
            </a>
          </div>
          <div className={teamListStyle.developer_content}>
            <a href="#" className={`${teamListStyle.dev_name} ${value.mode === 'light'?teamListStyle.lightName:teamListStyle.darkName}`}>
              <h5>{dev.name}</h5>
            </a>
            <p className={teamListStyle.dev_role}>{dev.role}</p>
          </div>
        </animated.div>
      );
    });
  };

  return (
    <div>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}><Link type="button" to={"/team-list"} className={HeaderStyle.link}>{data.firstBreakCrumb}</Link></li>
              <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
              <li className={HeaderStyle.breakCrumbList} >{data.secondBreakCrumb}</li>
            </ol>
          </div>
        </div>
      </section>
      <section className={value.mode === 'light'?teamListStyle.light:teamListStyle.dark}>
        <div className={teamListStyle.container}>
          <div className={teamListStyle.menuList}>
            <div className={teamListStyle.lists}>
              <nav>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: true ? "#0056b3" : value.mode === 'light'? '#000000':'#fff',
                      textDecoration: "none",
                    };
                  }}
                  to={`/all`}
                  className={`${teamListStyle.links} ${value.mode === 'light'?teamListStyle.lightLink:teamListStyle.darkLink}`}
                >
                  All
                </NavLink>
                {team}
              </nav>
            </div>
          </div>
          <div className={teamListStyle.teamList}>
            <Routes>
              <Route path="*" element={<Alldev />} />
              <Route path="team-list/design" element={<Design />} />
              <Route path="team-list/frontend" element={<Frontend />} />
              <Route path="team-list/backend" element={<Backend />} />
              <Route path="team-list/mobile" element={<Mobile />} />
              <Route path="team-list/network" element={<Network />} />
            </Routes>

          </div>
          <div className={teamListStyle.parent_container}>
              <div className={`${teamListStyle.child_container} ${value.mode === 'dark'?teamListStyle.darkThemeText:''}`}>
                  <p className={teamListStyle.children_p}>
                  We see ourselves as much more than just a studio, but as a
                  family of like-minded, kind and talented people who love to
                  collaborate and make awesome sh*t together.
                  </p>
                  <p className={teamListStyle.children_p}>
                  We’re definitely close-knit, but not in a weird, creepy kind of
                  way. We genuinely like each other and like to spend time
                  together, whether it's for a quick cappuccino break in the
                  studio or a night out at the latest gallery or museum opening.
                  </p>
                  <p className={teamListStyle.children_p}>
                  While we love what we do, we know that life is about more than
                  work and that we each have one beyond Bolden. We value healthy
                  boundaries and will never ask you to work late or bother you on
                  weekends (unless it’s for something fun).
                  </p>
                  <p className={teamListStyle.children_p}>
                  Expecting a delivery and need to work from home? Kid’s sick and
                  need to jet? No problem! We’ve always had a flexible approach to
                  working from home and totally understand if you need to stay in
                  or things come up. Life happens.
                  </p>
                  <button className={teamListStyle.children_button}>
                  Go to Events-Right Page
                  </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
