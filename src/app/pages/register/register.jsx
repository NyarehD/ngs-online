import React from "react";
// import RegisterStyle from './register.module.sass'
import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import LoginStyle from '../login/login.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faUser , faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import RegisterImage from '../../../assets/register/register.png'

function Register(registerContent) {
  const data = registerContent.registerContent;
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

      <div className={LoginStyle.container}>
        <div className={LoginStyle.row}>
          <div className={LoginStyle.content}>
            <h2 className={LoginStyle.contentHeader}>Register Form</h2>
            <form className={LoginStyle.form} action="">
              <div className={LoginStyle.fullnameInputSection}>
                <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.fullnameInput}
                  type="text"
                  placeholder="FULL NAME"
                />
              </div>

              <div className={LoginStyle.usernameInputSection}>
                <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.usernameInput}
                  type="text"
                  placeholder="USER NAME"
                />
              </div>

              <div className={LoginStyle.phoneNumberInputSection}>
                <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.phoneNumberInput}
                  type="number"
                  placeholder="PHONE"
                />
              </div>

              <div className={LoginStyle.eMailInputSection}>
                <FontAwesomeIcon icon={faUser} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.eMailInput}
                  type="email"
                  placeholder="E-MAIL"
                />
              </div>


              <div className={LoginStyle.passwordInputSection}>
                <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.passwordInput}
                  type="password"
                  name=""
                  placeholder="PASSWORD"
                  id=""
                />
              </div>

              <div className={LoginStyle.confirmPasswordInputSection}>
                <FontAwesomeIcon icon={faLock} className={LoginStyle.icon} />
                <input
                  className={LoginStyle.confirmPasswordInput}
                  type="password"
                  name=""
                  placeholder="CONFIRM PASSWORD"
                  id=""
                />
              </div>

              <div className={LoginStyle.submitButtonSection}>
                <button className={LoginStyle.submitButton}>
                  <span className={LoginStyle.loginSpan}>Register</span>
                </button>
              </div>
            </form>
          </div>

          <div className={LoginStyle.image}>
            <img src={RegisterImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
