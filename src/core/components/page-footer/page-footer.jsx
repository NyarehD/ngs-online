import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker , faAngleRight } from "@fortawesome/free-solid-svg-icons";

import pageFooterStyles from "./page-footer.module.sass";
import { Context } from "../../../App";

const PageFooter = () => {
  const [value, setValue] = useContext(Context);
  return (
    <div
      className={value.mode === "dark" ? pageFooterStyles.containerDark : ""}
    >
      <div className={`${pageFooterStyles.container}`}>
        <div className={pageFooterStyles.row}>
          <div
            className={`${pageFooterStyles.col_xs_12} ${pageFooterStyles.col_md_6} ${pageFooterStyles.col_lg_3}`}
          >
            <div
              class={`${pageFooterStyles.widget} ${pageFooterStyles.widget_text}`}
            >
              <h4 class={pageFooterStyles.widget_title}>About</h4>
              <p>
                At VSG, we build websites,<br /> e-commerance app, websites hosting,
                selling domain, writing creativer content and database portal.
              </p>
              <div
                class={`${pageFooterStyles.widget} ${pageFooterStyles.widget_social_buttons}`}
              >
                <a
                  href="#"
                  class={`${pageFooterStyles.fa_facebook} ${pageFooterStyles.color_bg_icon} ${pageFooterStyles.rounded_icon}`}
                  title="facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  class={`${pageFooterStyles.fa_twitter} ${pageFooterStyles.color_bg_icon} ${pageFooterStyles.rounded_icon}`}
                  title="twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  class={`${pageFooterStyles.fa_youtube_play} ${pageFooterStyles.color_bg_icon} ${pageFooterStyles.rounded_icon}`}
                  title="youtube_play"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${pageFooterStyles.col_xs_12} ${pageFooterStyles.col_md_6} ${pageFooterStyles.col_lg_3}`}
          >
            <div class={`${pageFooterStyles.widget} ${pageFooterStyles.links}`}>
              <h4 class={pageFooterStyles.widget_title}>Links</h4>
              <ul>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="/">Home</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="/team-list">Team</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="/about">About</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${pageFooterStyles.col_xs_12} ${pageFooterStyles.col_md_6} ${pageFooterStyles.col_lg_3}`}
          >
            <div
              class={`${pageFooterStyles.widget} ${pageFooterStyles.services_links}`}
            >
              <h4 class={pageFooterStyles.widget_title}>Services</h4>
              <ul>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="blog-right.html">Web Development</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="blog-right.html">Web Hosting</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="blog-right.html">Content Writing</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="blog-right.html">Domain Service</a>
                </li>
                <li class={pageFooterStyles.cat_item}>
                  <FontAwesomeIcon className={pageFooterStyles.icon} icon={faAngleRight} />
                  <a href="blog-right.html">Database Portal</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${pageFooterStyles.col_xs_12} ${pageFooterStyles.col_md_6} ${pageFooterStyles.col_lg_3}`}
          >
            <div
              class={`${pageFooterStyles.widget} ${pageFooterStyles.widget_icons_list}`}
            >
              <h4 class={pageFooterStyles.widget_title}>Call Us</h4>
              <p class={pageFooterStyles.small_text}>23-456-7890</p>
              <a href="#">
                <i class={`${pageFooterStyles.fa_envelope_o}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                EMAIL US
              </a>
              <h4 class={pageFooterStyles.widget_title}>Visit Us</h4>
              <p class={pageFooterStyles.small_text}>
                246 Benson St., Ashwaubenon
              </p>
              <a href="#">
                <i class={`${pageFooterStyles.fa_map_marker}`}>
                  <FontAwesomeIcon icon={faMapMarker} />
                </i>
                GET DIRECTION
              </a>
            </div>
            <div class="divider-45 d-none d-md-block d-xlz-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
