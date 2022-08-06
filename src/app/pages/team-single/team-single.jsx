import React from "react";
import TeamSingleStyle from "./team-single.module.sass";
import TeamSinglePhoto from "../../../assets/team-single-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import { useLocation as Location, Link } from "react-router-dom";
import { GrFacebookOption } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { GrGoogle } from 'react-icons/gr';
import { GrYoutube } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';

function teamSingle(teamSingleContent) {
  const { state } = Location();

  const data = teamSingleContent.teamSingleContent;
  return (
    <div className="">
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}>
                <Link
                  type="button"
                  to={"/team-single"}
                  className={HeaderStyle.link}
                >
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
                <a href="/team" className={HeaderStyle.link}>
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

      <div className={TeamSingleStyle.tsContainer}>
          <div className={TeamSingleStyle.tsRow}>
            <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_12} ${TeamSingleStyle.col_lg_6}`}>
              <img
                  src={TeamSinglePhoto}
                  className={TeamSingleStyle.teamSingleMemberPhoto}
                  alt="TeamSingleMemberPhoto"
                />
            </div>

            <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_12} ${TeamSingleStyle.col_lg_6}`}>
              <h2 className={TeamSingleStyle.teamSingleMemberName}>{state.name}</h2>

              <div className={TeamSingleStyle.socialCon}>
                <a href="#">
                  <div className={`${TeamSingleStyle.socialIconCon} ${TeamSingleStyle.socialIconConFb}`}>
                    <GrFacebookOption className={`${TeamSingleStyle.socialIcon} ${TeamSingleStyle.facebook}`} />
                  </div>
                </a>

                <a href="#">
                  <div className={`${TeamSingleStyle.socialIconCon} ${TeamSingleStyle.socialIconConTwitter}`}>
                    <GrTwitter className={`${TeamSingleStyle.socialIcon} ${TeamSingleStyle.twitter}`} />
                  </div>
                </a>

                <a href="#">
                  <div className={`${TeamSingleStyle.socialIconCon} ${TeamSingleStyle.socialIconConRed}`}>
                    <GrGoogle className={`${TeamSingleStyle.socialIcon} ${TeamSingleStyle.google}`} />
                  </div>
                </a>

                <a href="#">
                  <div className={`${TeamSingleStyle.socialIconCon} ${TeamSingleStyle.socialIconConRed}`}>
                    <GrYoutube className={`${TeamSingleStyle.socialIcon} ${TeamSingleStyle.youtube}`} />
                  </div>
                </a>

                <a href="#">
                  <div className={`${TeamSingleStyle.socialIconCon} ${TeamSingleStyle.socialIconConRed}`}>
                    <GrInstagram className={`${TeamSingleStyle.socialIcon} ${TeamSingleStyle.instagram}`} />
                  </div>
                </a>
              </div>

              <div className={TeamSingleStyle.introCon}>
                <div className={TeamSingleStyle.introLeft}>
                  <div className={TeamSingleStyle.introOneCon}>
                    <h4> Occupation: </h4>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <h4> Experience: </h4>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <h4> Email: </h4>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <h4> Location: </h4>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <h4> Phone: </h4> 
                  </div>
                </div>

                <div className={TeamSingleStyle.introRight}>
                  <div className={TeamSingleStyle.introOneCon}>
                    <div>Senior Executive</div>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <div>9 Years</div>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <div>	deanwhales@MaxiCom.com</div>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <div>Westmond, MA</div>
                  </div>

                  <div className={TeamSingleStyle.introOneCon}>
                    <div>012-985-624</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className={TeamSingleStyle.PersonalExperience}>
          <div className={TeamSingleStyle.personalExperienceContainer}>
            <div className={TeamSingleStyle.content}>
              <h5 className={TeamSingleStyle.content_title}>
                Personal Experience
              </h5>
              <p className={TeamSingleStyle.content_text}>
                Doloremque quam. Exercitation totam or cupidatat culpa but autem. In labore so nostrud asper natur officia magna, so quasi. Sit nequeporro dolor Iure. Pellentesque lorem mauris, vehicula vel nulla nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab ad dolor repudiandae consequatur voluptates neque, soluta atque sit sapiente dolores numquam, quos corrupti illum facilis tempora ducimus ratione nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro maxime atque reprehenderit provident velit non voluptatem eum delectus, minus eos voluptas quia? Iste sit accusantium similique quos, omnis harum nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas vel, dolores animi, asperiores fugiat quis ipsa sequi quos, obcaecati optio similique temporibus modi labore. Eaque illum nisi modi consequatur!
              </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default teamSingle;
