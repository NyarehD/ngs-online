import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {useSpring, animated} from "react-spring"
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

import img01 from "../../../assets/team-list/01.jpg"
import img02 from "../../../assets/team-list/02.jpg"
import img03 from "../../../assets/team-list/03.jpg"
import img04 from "../../../assets/team-list/04.jpg"
import img05 from "../../../assets/team-list/05.jpg"
import img06 from "../../../assets/team-list/06.jpg"
import img07 from "../../../assets/team-list/07.jpg"

import teamListStyle from "./team-list.module.sass"

export default function TeamList(){

    const teams=[
        {
            id:1,
            name:"Design",
            team:"design"
        },
        {
            id:2,
            name:"Frontend",
            team:"frontend"
        },
        {
            id:3,
            name:"BackendDatabaseQc",
            team:"backend"
        },
        {
            id:4,
            name:"Mobile",
            team:"mobile"
        },
        {
            id:5,
            name:"Network",
            team:"network"
        }
    ]
    const designTeam= [
        {
            id:1,
            name:"Deam Whales",
            role:"Design Team Leader",
            img:img02,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },

        {
            id:2,
            name:"Jamie Brant",
            role:"SENIOR DESIGNER",
            img:img07,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:3,
            name:"Lesia Travis",
            role:"SENIOR UI/UX DESIGNER",
            img:img01,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        }
    ]
    const frontendTeam= [
        {
            id:1,
            name:"Jamie Brant",
            role:"Frontend Team Leader",
            img:img03,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:2,
            name:"Dean Whales",
            role:"Senior Developer",
            img:img02,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:3,
            name:"Jamie Brant",
            role:"MID SENIOR DEVELOPER",
            img:img05,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        }
    ]

    const backendTeam= [
        {
            id:1,
            name:"Amelia Brynne",
            role:"BACKEND Team Leader",
            img:img03,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:2,
            name:"Lark Laverne",
            role:"DATABASE MANAGEMENT LEADER",
            img:img04,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:3,
            name:"Jackson Janey",
            role:"DATABASE MANAGEMENT LEADER",
            img:img06,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        },
        {
            id:4,
            name:"Lark Laverne",
            role:"DATABASE MANAGEMENT LEADER",
            img:img01,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        }
    ]
    const mobileTeam=[
        {
            id:1,
            name:"Lesia Travis",
            role:"MOBILE Team Leader",
            img:img04,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        }
    ]
    const networtTeam=[
        {
            id:1,
            name:"Jackson Janey",
            role:"SYSTEM NETWORK ENGINEER",
            img:img05,
            facebook:"facebook",
            twitter:"twitter",
            youtube:"youtube",
            instagram:"instagram",
            detail_link:"#",
        }
    ]

    const [teamSelect, setTeamSelect]=useState(designTeam)
    useEffect(()=>{
        setTeamSelect(prevTeam =>[...prevTeam,...frontendTeam, ...backendTeam, ...mobileTeam, ...networtTeam])
    },[])


    const Design=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
            designTeam.map(dev=>{
                return(
        
                    <animated.div 
                        className={teamListStyle.developer}
                        style={transition}
                    >
                        <div className={teamListStyle.developer_media}>
                                <a href={dev.detail_link}>
                                    <img
                                        src={dev.img}
                                        alt=""
                                        className={teamListStyle.dev_img}
                                    />
                                    <div className={teamListStyle.hover}></div>
                                    <div className={teamListStyle.dev_social_icons}>
                                        <a href={dev.facebook}>
                                            <div className={teamListStyle.dev_Facebook}>
                                                <FontAwesomeIcon 
                                                    icon={faFacebookF}
                                                    className={teamListStyle.fac_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.twitter}>
                                            <div className={teamListStyle.dev_Twitter}>
                                                <FontAwesomeIcon 
                                                    icon={faTwitter}
                                                    className={teamListStyle.twi_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.youtube}>
                                            <div className={teamListStyle.dev_Youtube}>
                                                <FontAwesomeIcon 
                                                    icon={faYoutube}
                                                    className={teamListStyle.yout_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.instagram}>
                                            <div className={teamListStyle.dev_Instagram}>
                                                <FontAwesomeIcon 
                                                    icon={faInstagram}
                                                    className={teamListStyle.ins_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
        
                                    </div>
                                </a>
                        </div>
                        <div className={teamListStyle.developer_content}>
                                <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                                <p className={teamListStyle.dev_role}>{dev.role}</p>
                        </div>
                    </animated.div>
                )
            })
        
        )
    }
    const Frontend=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
            frontendTeam.map(dev=>{
                return(
        
                    <animated.div 
                        className={teamListStyle.developer}
                        style={transition}
                    >
                        <div className={teamListStyle.developer_media}>
                                <a href={dev.detail_link}>
                                    <img
                                        src={dev.img}
                                        alt=""
                                        className={teamListStyle.dev_img}
                                    />
                                    <div className={teamListStyle.hover}></div>
                                    <div className={teamListStyle.dev_social_icons}>
                                        <a href={dev.facebook}>
                                            <div className={teamListStyle.dev_Facebook}>
                                                <FontAwesomeIcon 
                                                    icon={faFacebookF}
                                                    className={teamListStyle.fac_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.twitter}>
                                            <div className={teamListStyle.dev_Twitter}>
                                                <FontAwesomeIcon 
                                                    icon={faTwitter}
                                                    className={teamListStyle.twi_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.youtube}>
                                            <div className={teamListStyle.dev_Youtube}>
                                                <FontAwesomeIcon 
                                                    icon={faYoutube}
                                                    className={teamListStyle.yout_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.instagram}>
                                            <div className={teamListStyle.dev_Instagram}>
                                                <FontAwesomeIcon 
                                                    icon={faInstagram}
                                                    className={teamListStyle.ins_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
        
                                    </div>
                                </a>
                        </div>
                        <div className={teamListStyle.developer_content}>
                                <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                                <p className={teamListStyle.dev_role}>{dev.role}</p>
                        </div>
                    </animated.div>
                )
            })
        
        )
    }
    const Backend=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
            backendTeam.map(dev=>{
                return(
        
                    <animated.div 
                        className={teamListStyle.developer}
                        style={transition}
                    >
                        <div className={teamListStyle.developer_media}>
                                <a href={dev.detail_link}>
                                    <img
                                        src={dev.img}
                                        alt=""
                                        className={teamListStyle.dev_img}
                                    />
                                    <div className={teamListStyle.hover}></div>
                                    <div className={teamListStyle.dev_social_icons}>
                                        <a href={dev.facebook}>
                                            <div className={teamListStyle.dev_Facebook}>
                                                <FontAwesomeIcon 
                                                    icon={faFacebookF}
                                                    className={teamListStyle.fac_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.twitter}>
                                            <div className={teamListStyle.dev_Twitter}>
                                                <FontAwesomeIcon 
                                                    icon={faTwitter}
                                                    className={teamListStyle.twi_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.youtube}>
                                            <div className={teamListStyle.dev_Youtube}>
                                                <FontAwesomeIcon 
                                                    icon={faYoutube}
                                                    className={teamListStyle.yout_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.instagram}>
                                            <div className={teamListStyle.dev_Instagram}>
                                                <FontAwesomeIcon 
                                                    icon={faInstagram}
                                                    className={teamListStyle.ins_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
        
                                    </div>
                                </a>
                        </div>
                        <div className={teamListStyle.developer_content}>
                                <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                                <p className={teamListStyle.dev_role}>{dev.role}</p>
                        </div>
                    </animated.div>
                )
            })

        )
    }

    const Mobile=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
        mobileTeam.map(dev=>{
            return(
    
                <animated.div 
                    className={teamListStyle.developer}
                    style={transition}
                >
                    <div className={teamListStyle.developer_media}>
                            <a href={dev.detail_link}>
                                <img
                                    src={dev.img}
                                    alt=""
                                    className={teamListStyle.dev_img}
                                />
                                <div className={teamListStyle.hover}></div>
                                <div className={teamListStyle.dev_social_icons}>
                                    <a href={dev.facebook}>
                                        <div className={teamListStyle.dev_Facebook}>
                                            <FontAwesomeIcon 
                                                icon={faFacebookF}
                                                className={teamListStyle.fac_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.twitter}>
                                        <div className={teamListStyle.dev_Twitter}>
                                            <FontAwesomeIcon 
                                                icon={faTwitter}
                                                className={teamListStyle.twi_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.youtube}>
                                        <div className={teamListStyle.dev_Youtube}>
                                            <FontAwesomeIcon 
                                                icon={faYoutube}
                                                className={teamListStyle.yout_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.instagram}>
                                        <div className={teamListStyle.dev_Instagram}>
                                            <FontAwesomeIcon 
                                                icon={faInstagram}
                                                className={teamListStyle.ins_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
    
                                </div>
                            </a>
                    </div>
                    <div className={teamListStyle.developer_content}>
                            <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                            <p className={teamListStyle.dev_role}>{dev.role}</p>
                    </div>
                </animated.div>
            )
        })
        
        )
    }

    const Network=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
            networtTeam.map(dev=>{
                return(
        
                    <animated.div 
                        className={teamListStyle.developer}
                        style={transition}
                    >
                        <div className={teamListStyle.developer_media}>
                                <a href={dev.detail_link}>
                                    <img
                                        src={dev.img}
                                        alt=""
                                        className={teamListStyle.dev_img}
                                    />
                                    <div className={teamListStyle.hover}></div>
                                    <div className={teamListStyle.dev_social_icons}>
                                        <a href={dev.facebook}>
                                            <div className={teamListStyle.dev_Facebook}>
                                                <FontAwesomeIcon 
                                                    icon={faFacebookF}
                                                    className={teamListStyle.fac_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.twitter}>
                                            <div className={teamListStyle.dev_Twitter}>
                                                <FontAwesomeIcon 
                                                    icon={faTwitter}
                                                    className={teamListStyle.twi_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.youtube}>
                                            <div className={teamListStyle.dev_Youtube}>
                                                <FontAwesomeIcon 
                                                    icon={faYoutube}
                                                    className={teamListStyle.yout_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
                                        <a href={dev.instagram}>
                                            <div className={teamListStyle.dev_Instagram}>
                                                <FontAwesomeIcon 
                                                    icon={faInstagram}
                                                    className={teamListStyle.ins_icon}
                                                >
                                                </FontAwesomeIcon>
                                            </div>
                                        </a>
        
                                    </div>
                                </a>
                        </div>
                        <div className={teamListStyle.developer_content}>
                                <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                                <p className={teamListStyle.dev_role}>{dev.role}</p>
                        </div>
                    </animated.div>
                )
            })

        )
    }
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
    const team=teams.map(team=>{

        
        return(
            <NavLink 
                style={({ isActive }) => {
                    return {
                    color: isActive ? "#0056b3" : "",
                    textDecoration:"none",
                    };
                
                    }
                }
                to={`/${team.team}`}
                key={team.id}
                className={teamListStyle.links}
            >

                    {team.name}
            </NavLink>
        )
    })

    /** team display from selectioin */
    const Alldev=()=>{
        const transition=useSpring({
            from:{  opacity: 0, transform: `scale(0.5)`},
            to:{ opacity: 1, transform:' scale(1)'},
            delay: 50,
            config: { duration: 250 },
            leave:{x: 0, y: 0, width:50, height:50, opacity: 0},
        })
        return(
        teamSelect.map(dev=>{
            return(

                <animated.div 
                    className={teamListStyle.developer}
                    style={transition}
                >
                    <div className={teamListStyle.developer_media}>
                            <a href={dev.detail_link}>
                                <img
                                    src={dev.img}
                                    alt=""
                                    className={teamListStyle.dev_img}
                                />
                                <div className={teamListStyle.hover}></div>
                                <div className={teamListStyle.dev_social_icons}>
                                    <a href={dev.facebook}>
                                        <div className={teamListStyle.dev_Facebook}>
                                            <FontAwesomeIcon 
                                                icon={faFacebookF}
                                                className={teamListStyle.fac_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.twitter}>
                                        <div className={teamListStyle.dev_Twitter}>
                                            <FontAwesomeIcon 
                                                icon={faTwitter}
                                                className={teamListStyle.twi_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.youtube}>
                                        <div className={teamListStyle.dev_Youtube}>
                                            <FontAwesomeIcon 
                                                icon={faYoutube}
                                                className={teamListStyle.yout_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>
                                    <a href={dev.instagram}>
                                        <div className={teamListStyle.dev_Instagram}>
                                            <FontAwesomeIcon 
                                                icon={faInstagram}
                                                className={teamListStyle.ins_icon}
                                            >
                                            </FontAwesomeIcon>
                                        </div>
                                    </a>

                                </div>
                            </a>
                    </div>
                    <div className={teamListStyle.developer_content}>
                            <a href="#" className={teamListStyle.dev_name}><h5>{dev.name}</h5></a>
                            <p className={teamListStyle.dev_role}>{dev.role}</p>
                    </div>
                </animated.div>
            )
        })
    
    )
}
    return(
        <BrowserRouter>
        <section>
            <div className={teamListStyle.container}>
                <div className={teamListStyle.menuList}>
                    <div className={teamListStyle.lists}>
                        <nav>
                            <NavLink 
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#0056b3" : "",
                                    textDecoration:"none",
                                    };
                                }}
                                to={`/all`} 
                                className={teamListStyle.links}
                            >
                                All
                            </NavLink>
                            {team}
                        </nav>
                    </div>
                </div>
                <div className={teamListStyle.teamList}>
                    <Routes>
                        <Route path="*" element={<Alldev/>} />
                        <Route path="/design" element={<Design/>} />
                        <Route path="/frontend" element={<Frontend/>} />
                        <Route path="/backend" element={<Backend/>} />
                        <Route path="/mobile" element={<Mobile/>} />
                        <Route path="/network" element={<Network/>} />
                    </Routes>
                </div>
            </div>
        </section>
        </BrowserRouter>
    )
}