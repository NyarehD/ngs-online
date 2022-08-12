import React, {useContext, useState} from "react";
import {Context} from "../../../App.js";

// File
import EventSingleRight from "./event-single-right";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import Comments from "./comments";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import eventSingleStyles from "./event-single.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClock,
    faLocationDot,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

// Image
import topImg from "../../../assets/event/04.jpg";
import BlogStyle from "../blog/blog-single.module.sass";


export default function EventSingle({eventSingleContent}) {
    const [{mode}, setMode] = useContext(Context);
    const [nOComment, setNOComment] = useState(0)
    const data = eventSingleContent
    const darkTheme = mode === 'dark' ? eventSingleStyles.darkTheme : ""
    return (
        <div className={darkTheme}>
            <section className={HeaderStyle.box}>
                <HeaderCarousel/>
                <div className={HeaderStyle.bannerContent}>
                    <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
                    <div className={HeaderStyle.breakCrumb}>
                        <ol className={HeaderStyle.breakCrumbLists}>
                            <li className={HeaderStyle.breakCrumbList}>
                                <a href="/" className={HeaderStyle.link}>
                                    {data.firstBreakCrumb}
                                </a>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}>
                                <FontAwesomeIcon
                                    className={HeaderStyle.icon}
                                    icon={faAngleRight}
                                ></FontAwesomeIcon>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}>
                                <a href="/event" className={HeaderStyle.link}>
                                    {data.secondBreakCrumb}
                                </a>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}>
                                <FontAwesomeIcon
                                    className={HeaderStyle.icon}
                                    icon={faAngleRight}
                                ></FontAwesomeIcon>
                            </li>
                            <li className={HeaderStyle.breakCrumbList}>
                                {data.thirdBreakCrumb}
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <div className={eventSingleStyles.container}>
                <div className={eventSingleStyles.left}>
                    <article className={eventSingleStyles.article}>
                        <img
                            src={topImg}
                            alt=""
                            className={eventSingleStyles.articleTopImg}
                        />
                        <div className={eventSingleStyles.itemContent}>
                            <div className={eventSingleStyles.metaItems}>
                                <FontAwesomeIcon icon={faCalendarDays} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>March 12, 2018</span>
                                <FontAwesomeIcon icon={faLocationDot} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>
                  Consetetur Sadipscing Eitr
                </span>
                                <FontAwesomeIcon icon={faClock} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>
                  01:15 pm - 05:30 pm
                </span>
                            </div>
                            <hr/>
                            <div className={`${eventSingleStyles.content} ${darkTheme}`}>
                                <p className={`${eventSingleStyles.excerpt} ${darkTheme}`}>
                                    At vero eos accusam justo duo dolores et rebum clita kasd
                                    gubergren nosea takimata sanctus est dolor sit amet
                                </p>
                                <p>
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                    dolor sit amet. Lorem ipsum dolor amet consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt.
                                </p>
                                <ul className={eventSingleStyles.styledList}>
                                    <li>Consetetur sadipscing elitr, sed diam nonumy</li>
                                    <li>Eirmod tempor invidunt ut labore</li>
                                    <li>Dolore magna aliquyam erat</li>
                                    <li>Sed diam voluptua. At vero eos accusam</li>
                                </ul>
                                <p>
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctusamet. Lorem ipsum
                                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat.
                                </p>
                            </div>
                        </div>
                    </article>
                    <div className={eventSingleStyles.comments}>
                        <h4 className={`${eventSingleStyles.commentsTitle} ${darkTheme}`}>Comments</h4>
                        <Comments currentUserId="1" setNOComment={setNOComment} themeStyle={mode}/>
                    </div>
                </div>
                <EventSingleRight/>
            </div>
        </div>
    );
}
