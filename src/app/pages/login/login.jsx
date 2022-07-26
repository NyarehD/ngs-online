import React from "react";
import LoginStyle from "./login.module.sass";
import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight , faUser , faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Context } from "../../../App";

import loginImage from "../../../assets/login/login.png";
import { useContext } from "react";

function Login(loginContent) {
  const data = loginContent.loginContent;
  const [value, setValue] = useContext(Context)
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

      {/* .usernameInputDark , .passwordInputDark  , .fullnameInputDark , .phoneNumberInputDark , .eMailInputDark , .confirmPasswordInputDark , .submitButtonDark */}
      <div className={LoginStyle.container}>
        <div className={LoginStyle.row}>
          <div className={value.mode === "light" ? LoginStyle.content : LoginStyle.contentDark}>
            <h2 className={`${LoginStyle.contentHeader} ${value.mode === 'dark'?LoginStyle.darkText:''}`}>Login Form</h2>
            <form action="">
                <div className={LoginStyle.usernameInputSection}>
                    <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                    <input className={value.mode === "light" ? LoginStyle.usernameInput : LoginStyle.usernameInputDark} type="text" placeholder="USER NAME" />
                </div>
                <div className={LoginStyle.passwordInputSection}>
                    <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                    <input className={value.mode === "light" ? LoginStyle.passwordInput : LoginStyle.passwordInputDark} type="password" name="" placeholder="PASSWORD" id="" />
                </div>

                <div className={LoginStyle.submitButtonSection}>
                    <button className={value.mode === "light" ? LoginStyle.submitButton : LoginStyle.submitButtonDark}>
                      <span className={value.mode === "light" ? LoginStyle.loginSpan : LoginStyle.loginSpanDark}>Login</span>
                    </button>
                </div>
            </form>
          </div>

          <div className={LoginStyle.imageCon}>
            <img src={loginImage} className={LoginStyle.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
