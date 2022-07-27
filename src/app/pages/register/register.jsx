import React from "react";
// import RegisterStyle from './register.module.sass'
import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import LoginStyle from '../login/login.module.sass';
import RegisterStyle from './register.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faUser , faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import { Context } from "../../../App";
import { useContext } from "react";

import RegisterImage from '../../../assets/register/register.png'

function Register(registerContent) {
  const data = registerContent.registerContent;
  const [value, setValue] = useContext(Context)
  console.log(data);
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

      <div className={RegisterStyle.container}>
        <div className={RegisterStyle.row}>
          <div className={value.mode === "light" ? `${LoginStyle.content} ${RegisterStyle.borderRadius}` : `${LoginStyle.contentDark} ${RegisterStyle.borderRadius}`}>
            <h2 className={`${LoginStyle.contentHeader} ${value.mode === 'dark'?LoginStyle.darkText:''}`}>Register Form</h2>
            <form className={LoginStyle.form} action="">
              <div className={LoginStyle.form}>
                <div className={LoginStyle.fullnameInputSection}>
                  <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.fullnameInput : LoginStyle.fullnameInputDark}
                    type="text"
                    placeholder="FULL NAME"
                  />
                </div>

                <div className={LoginStyle.usernameInputSection}>
                  <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.usernameInput : LoginStyle.usernameInputDark}
                    type="text"
                    placeholder="USER NAME"
                  />
                </div>

                <div className={LoginStyle.phoneNumberInputSection}>
                  <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.phoneNumberInput : LoginStyle.phoneNumberInputDark}
                    type="number"
                    placeholder="PHONE"
                  />
                </div>

                <div className={LoginStyle.eMailInputSection}>
                  <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.eMailInput : LoginStyle.eMailInputDark}
                    type="email"
                    placeholder="E-MAIL"
                  />
                </div>


                <div className={LoginStyle.passwordInputSection}>
                  <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.passwordInput : LoginStyle.passwordInputDark}
                    type="password"
                    name=""
                    placeholder="PASSWORD"
                    id=""
                  />
                </div>

                <div className={LoginStyle.confirmPasswordInputSection}>
                  <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                  <input
                    className={value.mode === "light" ? LoginStyle.confirmPasswordInput : LoginStyle.confirmPasswordInputDark}
                    type="password"
                    name=""
                    placeholder="CONFIRM PASSWORD"
                    id=""
                  />
                </div>
              </div>
              
              <div className={LoginStyle.submitButtonSection}>
                <button className={value.mode === "light" ? LoginStyle.submitButton : LoginStyle.submitButtonDark}>
                  <span className={value.mode === "light" ? LoginStyle.loginSpan : LoginStyle.loginSpanDark}>Register</span>
                </button>
              </div>
            </form>
          </div>

          <div className={LoginStyle.imageCon}>
            <img src={RegisterImage} className={LoginStyle.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
