import React, {useState, useEffect, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useSpring, animated} from "react-spring";
import {Route, Routes, NavLink, Link, useNavigate} from "react-router-dom";
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
import {Context} from "../../../App";
import Slider from "react-slick"
import Img1 from "../../../assets/team-list/carousel/content.jpg";
import Img2 from "../../../assets/team-list/carousel/dollar.png";
import Img3 from "../../../assets/team-list/carousel/database.png";
import Img4 from "../../../assets/team-list/carousel/design.png";
import Img5 from "../../../assets/team-list/carousel/domain.jpg";
import Img6 from "../../../assets/team-list/carousel/teamwork.png";
import {Select, MenuItem, FormControl} from "@mui/material";

export default function TeamList(teamListContent) {
    const data = teamListContent.teamListContent
    const [value] = useContext(Context)
    const navigate = useNavigate();
    const teams = [
        {
            id: 1,
            name: "All",
            team: "all",
        },
        {
            id: 2,
            name: "Design",
            team: "design",
        },
        {
            id: 3,
            name: "Frontend",
            team: "frontend",
        },
        {
            id: 4,
            name: "BackendDatabaseQc",
            team: "backend",
        },
        {
            id: 5,
            name: "Mobile",
            team: "mobile",
        },
        {
            id: 6,
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
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
            detail_link: "team-single",
        },
    ];

    const [teamSelect, setTeamSelect] = useState([]);
    useEffect(() => {
        setTeamSelect(() => [
            ...designTeam,
            ...frontendTeam,
            ...backendTeam,
            ...mobileTeam,
            ...networtTeam,
        ]);
    }, []);

    const Design = () => {
        const transition = useSpring({
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return designTeam.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div key={dev.id}
                              className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                              style={transition}
                >
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => sendData()}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
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
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return frontendTeam.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div
                    className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                    style={transition}
                    key={`${dev.name}${dev.id}`}
                >
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => sendData()}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
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
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return backendTeam.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div
                    className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                    style={transition}
                    key={`${dev.name}${dev.id}`}
                >
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => sendData()}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
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
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return mobileTeam.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div
                    className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                    style={transition}
                    key={`${dev.name}${dev.id}`}
                >
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => sendData()}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
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
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return networtTeam.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div
                    className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                    style={transition}
                    key={`${dev.name}${dev.id}`}
                >
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => sendData()}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
                            <h5>{dev.name}</h5>
                        </a>
                        <p className={teamListStyle.dev_role}>{dev.role}</p>
                    </div>
                </animated.div>
            );
        });
    };
    // Carousel
    let images = [
        {image: Img1, id: 1, title: "lorem blah blah", alt: "someting"},
        {image: Img2, id: 2, title: "lorem blah blah", alt: "someting"},
        {image: Img3, id: 3, title: "lorem blah blah", alt: "someting"},
        {image: Img4, id: 4, title: "lorem blah blah", alt: "someting"},
        {image: Img5, id: 5, title: "lorem blah blah", alt: "someting"},
        {image: Img6, id: 6, title: "lorem blah blah", alt: "someting"}
    ]

    function Carousel() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
            <Slider {...settings} className={teamListStyle.carousel}>
                {images.map((img, index) => (
                    <div key={`img${index}`} className={teamListStyle.carouselItem}>
                        <div className={teamListStyle.carouselImgContainer}>
                            <a href="/">
                                <img src={img.image} alt={img.alt} className={teamListStyle.carouselImg}/>
                                <div className={teamListStyle.overlay}></div>
                            </a>
                        </div>
                        <div className={teamListStyle.carouselContent}>
                            <h6>
                                <a href="/">{img.title}</a>
                            </h6>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }

    const [currentTeam, setCurrentTeam] = useState("all");
    const [windowInnerWidth, setWindowInnerWidth] = useState(0)

    function handleCurrentTeamChange(event) {
        setCurrentTeam(event.target.value)
    }

    function changeWindowSize() {
        setWindowInnerWidth(window.innerWidth)
    }

    let isDarkMode = value.mode === "dark";
    useEffect(() => {
        navigate(`${currentTeam}`)
    }, [currentTeam])
    useEffect(() => {
        document.addEventListener("resize", changeWindowSize)
        return () => {
            document.removeEventListener("resize", changeWindowSize)
        }
    }, [windowInnerWidth])
    const team = window.innerWidth >= 500 ? teams.map((team) => {
        return (
            <NavLink
                style={({isActive}) => {
                    return {
                        color: isActive ? "#0056b3" : value.mode === 'light' ? '#000000' : '#fff',
                        textDecoration: "none",
                    };
                }}
                to={`${team.team}`}
                key={team.id}
                className={`${teamListStyle.links} ${value.mode === 'light' ? teamListStyle.lightLink : teamListStyle.darkLink}`}
            >
                {team.name}
            </NavLink>
        );
    }) : (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <Select
                value={currentTeam}
                onChange={handleCurrentTeamChange}
                displayEmpty
                classes={{
                    select: isDarkMode ? teamListStyle.selectTeamRootDark : "",
                }}
                MenuProps={{classes: {list: isDarkMode ? teamListStyle.selectTeamListDark : ""}}}
                variant={"outlined"}
                sx={{color: isDarkMode ? "white" : ""}}
            >
                {teams.map((team, index) => (
                    <MenuItem value={team.team} key={`${team.team}${index}`}>
                        {team.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )

    /** team display from selectioin */
    const Alldev = () => {
        const transition = useSpring({
            from: {opacity: 0, transform: `scale(0.5)`},
            to: {opacity: 1, transform: " scale(1)"},
            delay: 50,
            config: {duration: 250},
            leave: {x: 0, y: 0, width: 50, height: 50, opacity: 0},
        });
        return teamSelect.map((dev) => {

            const sendData = () => {
                navigate('/team-single',
                    {
                        state: {
                            id: dev.id,
                            name: dev.name,
                            role: dev.role
                        }
                    });
            }

            return (
                <animated.div
                    className={`${teamListStyle.developer} ${value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}`}
                    style={transition} key={`${dev.name}${dev.id}`}>
                    <div className={teamListStyle.developer_media}>
                        <a href={dev.detail_link} onClick={() => {
                            sendData()
                        }}>
                            <img src={dev.img} alt="" className={teamListStyle.dev_img}/>
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
                        <a href="#"
                           className={`${teamListStyle.dev_name} ${value.mode === 'light' ? teamListStyle.lightName : teamListStyle.darkName}`}>
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
                <HeaderCarousel/>
                <div className={HeaderStyle.bannerContent}>
                    <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
                    <div className={HeaderStyle.breakCrumb}>
                        <ol className={HeaderStyle.breakCrumbLists}>
                            <li className={HeaderStyle.breakCrumbList}><Link type="button" to={"/team-list"}
                                                                             className={HeaderStyle.link}>{data.firstBreakCrumb}</Link>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}><FontAwesomeIcon className={HeaderStyle.icon}
                                                                                        icon={faAngleRight}></FontAwesomeIcon>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}>{data.secondBreakCrumb}</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className={value.mode === 'light' ? teamListStyle.light : teamListStyle.dark}>
                <div className={teamListStyle.container}>
                    <div className={teamListStyle.menuList}>
                        <div className={teamListStyle.lists}>
                            <nav className={teamListStyle.nav_lists}>
                                {team}
                            </nav>
                        </div>
                    </div>
                    <div className={teamListStyle.teamList}>
                        <Routes>
                            <Route path="*" element={<Alldev/>}/>
                            <Route path="design" element={<Design/>}/>
                            <Route path="frontend" element={<Frontend/>}/>
                            <Route path="backend" element={<Backend/>}/>
                            <Route path="mobile" element={<Mobile/>}/>
                            <Route path="network" element={<Network/>}/>
                        </Routes>
                    </div>

                    <div className={teamListStyle.parent_container}>
                        <div
                            className={`${teamListStyle.child_container} ${value.mode === 'dark' ? teamListStyle.darkThemeText : ''}`}>
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
                                <span className={teamListStyle.children_button_text}>Go to Events-Right Page</span>
                            </button>
                        </div>
                    </div>
                    <Carousel/>
                </div>
            </section>
        </div>
    );
}
