import React from "react";
import LoginStyle from "./login.module.sass";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight , faUser , faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import loginImage from "../../../assets/login/login.png";

function Login(loginContent) {
  const data = loginContent.loginContent;
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

      <div className={LoginStyle.container}>
        <div className={LoginStyle.row}>
          <div className={LoginStyle.content}>
            <h2 className={LoginStyle.contentHeader}>Login Form</h2>
            <form action="">
                <div className={LoginStyle.usernameInputSection}>
                    <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                    <input className={LoginStyle.usernameInput} type="text" placeholder="USER NAME" />
                </div>
                <div className={LoginStyle.passwordInputSection}>
                    <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                    <input className={LoginStyle.passwordInput} type="password" name="" placeholder="PASSWORD" id="" />
                </div>

                <div className={LoginStyle.submitButtonSection}>
                    <button className={LoginStyle.submitButton}>
                      <span className={LoginStyle.loginSpan}>Login</span>
                    </button>
                </div>
            </form>
          </div>

          <div className={LoginStyle.image}>
            <img src={loginImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
