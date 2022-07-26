import React, { useContext } from "react";
import termsOfUseStyle from "./terms-of-use.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Context } from "../../../App";
import termsOfUseImage from "../../../assets/terms-of-use/terms-of-use1.png";

function TermsOfUse(termsOfUseContent) {
  const data = termsOfUseContent.termsOfUseContent;
  const [value] = useContext(Context);
  console.log(value)

  return (
    <div>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
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
                {data.secondBreakCrumb}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className={termsOfUseStyle.container}>
        <div className={termsOfUseStyle.firstPara}>
          <div className={termsOfUseStyle.textContent}>
            <h4
              className={
                value.mode === "light"
                  ? termsOfUseStyle.header
                  : termsOfUseStyle.headerDark
              }
            >
              General Overview
            </h4>
            <p
              className={
                value.mode === "light"
                  ? termsOfUseStyle.description
                  : termsOfUseStyle.descriptionDark
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              volutpat mi. Sed imperdiet placerat consequat.Maecenas suscipit
              quam eget felis pulvinar porta. Nullamvolutpat dolor at
              scelerisque rhoncus. Vestibulum vitaeelementum magna, vitae
              vehicula mi. Aenean nulla velit,faucibus et tristique in,
              ultricies ut neque. Duisconvallis et libero vitae ultrices. Lorem
              ipsum dolor sitamet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={termsOfUseStyle.imageContent}>
            <img src={termsOfUseImage} alt="" />
          </div>
        </div>

        <div className={termsOfUseStyle.secondPara}>
          <div className={termsOfUseStyle.textContent}>
            <h4
              className={
                value.mode === "light"
                  ? termsOfUseStyle.header
                  : termsOfUseStyle.headerDark
              }
            >
              Disclaimer
            </h4>
            <p
              className={
                value.mode === "light"
                  ? termsOfUseStyle.description
                  : termsOfUseStyle.descriptionDark
              }
            >
              Nam ligula metus, hendrerit tempor orci posuere, lobortis euismod
              tortor. Quisque porttitor, orci at ultricies gravida, dolor leo
              ornare tellus, sit amet semper lorem nunc pretium nulla. Aenean
              placerat finibus est, nec ultricies tellus lacinia quis. Nam nisi
              purus, pulvinar eu suscipit eu, pellentesque eu tortor. Sed quis
              dignissim eros. Cras a nisl pharetra, vehicula lorem vitae,
              gravida nunc. Nulla placerat maximus.
            </p>

            <ul
              className={
                value.mode === "light"
                  ? termsOfUseStyle.listItems
                  : termsOfUseStyle.listItemsDark
              }
            >
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Duis nec magna dignissim nisi finibus mollis.
              </li>
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Donec tristique sagittis accumsan. Mauris eleifend blandit
                porttitor.
              </li>
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Vivamus ac euismod diam, dignissim venenatis est.
              </li>
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Cras dictum, mi a tincidunt suscipit, turpis ex pulvinar mi, sit
                amet.
              </li>
            </ul>
          </div>
        </div>

        <div className={termsOfUseStyle.thirdPara}>
          <div className={termsOfUseStyle.textContent}>
            <h4
              className={
                value.mode === "light"
                  ? termsOfUseStyle.header
                  : termsOfUseStyle.headerDark
              }
            >
              Our Privacy Policy
            </h4>
            <p
              className={
                value.mode === "light"
                  ? termsOfUseStyle.description
                  : termsOfUseStyle.descriptionDark
              }
            >
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Quisque pulvinar tellus quis
              porttitor fringilla. Etiam in libero vel justo eleifend viverra.
              Nulla tincidunt nisl sed diam egestas fermentum. Donec egestas
              enim nec finibus semper. Donec sed massa ut enim facilisis porta
              vel nec urna. Duis fringilla sagittis tortor vitae pulvinar.
              Curabitur in rhoncus tortor. Ut tempor sapien at nibh porta, sit
              amet interdum turpis suscipit. Nulla eget sem condimentum nunc
              tincidunt congue eget in metus. Vivamus efficitur dapibus lorem in
              cursus. Suspendisse pulvinar et est vel blandit. Quisque et
              lacinia justo. Nam ultricies massa sed facilisis scelerisque.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        <div className={termsOfUseStyle.fouthPara}>
          <div className={termsOfUseStyle.textContent}>
            <h4
              className={
                value.mode === "light"
                  ? termsOfUseStyle.header
                  : termsOfUseStyle.headerDark
              }
            >
              Liability Limaitation
            </h4>
            <p
              className={
                value.mode === "light"
                  ? termsOfUseStyle.description
                  : termsOfUseStyle.descriptionDark
              }
            >
              Vestibulum nulla ante, dignissim eu mauris at, fringilla dictum
              lectus. Praesent congue porta porta. Aliquam sed varius nisi.
              Nullam quis mauris feugiat, cursus eros et, porttitor lorem.
              Pellentesque vitae arcu at arcu facilisis scelerisque. Donec
              blandit purus nec efficitur efficitur. Nulla et justo quis ipsum
              gravida maximus. Pellentesque congue sem eu arcu egestas, vel
              imperdiet est pharetra.
            </p>
            <ul
              className={
                value.mode === "light"
                  ? termsOfUseStyle.listItems
                  : termsOfUseStyle.listItemsDark
              }
            >
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Suspendisse imperdiet ligula orci, vitae suscipit.
              </li>
              <li className={termsOfUseStyle.listItem}>
                <FontAwesomeIcon
                  className={termsOfUseStyle.icon}
                  icon={faCircle}
                />
                Pellentesque sagittis faucibus mi. Duis placerat
              </li>
            </ul>
            <p
              className={
                value.mode === "light"
                  ? termsOfUseStyle.description
                  : termsOfUseStyle.descriptionDark
              }
            >
              Pellentesque ut semper elit. Curabitur ut neque sed tellus
              porttitor tristique non vitae erat. Sed maximus ullamcorper
              fringilla. Duis eget sem eu augue hendrerit consequat et at nibh.
              Proin non dolor arcu. In at leo vel arcu varius ultricies.
              Suspendisse leo nunc, maximus et pellentesque vel, porttitor id
              est. Cras luctus risus malesuada risus elementum, sit amet
              pellentesque lectus aliquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
