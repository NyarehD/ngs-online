import React, { useState, useContext } from "react";
import HomeStyle from "./home.module.sass";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import { useTransition, animated } from "react-spring";

import img1 from "../../../assets/home-gallary/01.jpg";
import img2 from "../../../assets/home-gallary/02.jpg";
import img3 from "../../../assets/home-gallary/03.jpg";
import img4 from "../../../assets/home-gallary/04.jpg";
import img5 from "../../../assets/home-gallary/05.jpg";
import img6 from "../../../assets/home-gallary/06.jpg";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Context } from "../../../App";

function Home(homeContent) {
  const [value, setValue] = useContext(Context);
  let Images = [img1, img2, img3, img4, img5, img6];
  const darkTheme = value.mode === 'dark'?HomeStyle.darkTheme:''
  let data = homeContent.homeContent;
  const [visiable, setVisiable] = useState(false);

  useState(() => {
    data ? setVisiable(true) : console.log("no data and no animation");
  }, []);

  const mainHeader = useTransition(visiable, {
    from: { x: 800, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 500,
  });

  const secondHeader = useTransition(visiable, {
    from: { x: -400, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 500,
  });

  const postData = [
    {
      title: "cable tv",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis odio turpis, finibus sit amet.",
      img: Images[0],
    },
    {
      title: "server",
      description:
        "In a mauris leo. Etiam suscipit ex sodales eros volutpat, at consequat neque sollicitudin.",
      img: Images[1],
    },
    {
      title: "internet",
      description:
        "Duis ut justo in sem suscipit mollis. Aliquam gravida sem quis neque finibus sollicitudin etiam.",
      img: Images[2],
    },
    {
      title: "hot reserve",
      description:
        "Integer porttitor dictum lectus, id pretium est dignissim vitae. Sed imperdiet elit quis.",
      img: Images[3],
    },
    {
      title: "router setup",
      description:
        "Aenean facilisis justo pulvinar, vulputate ipsum in, ornare est. Cras porta, tellus eget.",
      img: Images[4],
    },
    {
      title: "cable insurance",
      description:
        "Curabitur condimentum tortor at aliquet placerat. Aenean elit lorem, lobortis a tempor.",
      img: Images[5],
    },
  ];

  return (
    <div>
      <section className={HeaderStyle.box}>
        <HeaderCarousel className={HeaderStyle.carousel} />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.headerContent}>
            {mainHeader((style, item) =>
              item ? (
                <animated.span style={style} className={HeaderStyle.mainHeader}>
                  {data.mainHeader}
                </animated.span>
              ) : (
                ""
              )
            )}

            {secondHeader((style, item) =>
              item ? (
                <animated.span
                  style={style}
                  className={HeaderStyle.subMainHeader}
                >
                  {data.subMainHeader}
                </animated.span>
              ) : (
                ""
              )
            )}
          </h1>

          <h3 className={HeaderStyle.secondHeader}>{data.subHeader}</h3>

          <a href="/about" className={HeaderStyle.homeButton}>
            <span className={HeaderStyle.custom}>
              {data.firstButton}
              <i className={HeaderStyle.customDash}></i>
            </span>
          </a>

          <a href="/contact" className={HeaderStyle.homeButton}>
            <span className={HeaderStyle.custom}>
              {data.secondButton}
              <i className={HeaderStyle.customDash}></i>
            </span>
          </a>
        </div>
      </section>

      <div className={HomeStyle.aboutContainer}>
        <p className={`${HomeStyle.aboutPara} ${darkTheme}`}>
          We expertise in All Web Design and Development! We develop websites on
          test servers where you can see the progress of the sites and
          experience them in real time.
        </p>
        <button className={HomeStyle.aboutButton}>
          <a className={`${HomeStyle.aboutLink} ${value.mode === 'dark'?HomeStyle.darkButton:''}`} href="/about">
            {" "}
            Read More{" "}
          </a>
        </button>
      </div>

      <div className={HomeStyle.container}>
        <div className={HomeStyle.row}>
          {postData.map((post, index) => (
            <div
              key={index}
              className={
                value.mode === "light" ? HomeStyle.card : HomeStyle.cardDark
              }
            >
              <div className={HomeStyle.imageBox}>
                <img className={HomeStyle.img} src={post.img} alt="" />
                <a href="/service" className={HomeStyle.link}></a>
              </div>
              <div className={HomeStyle.textBox}>
                <h2 className={HomeStyle.title}>{post.title}</h2>
                <p
                  className={
                    value.mode === "light"
                      ? HomeStyle.description
                      : HomeStyle.descriptionDark
                  }
                >
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
