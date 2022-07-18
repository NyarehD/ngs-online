import React from "react";
import ContactStyle from "./contact.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faClose,
  faMapMarker,
  faPencil,
  faPhone,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from '../../../core/components/header/header.module.sass'
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Link } from "react-router-dom";

library.add(faMapMarker, faPencil, faPhone, faClock, faClose);

const AddressList = () => {
  return (
    <div className={ContactStyle.address_list_container}>
      {/* contact-info start  */}
      <div className={ContactStyle.contact_info}>
        <h1 className={ContactStyle.contact_head}>Contact Info</h1>
        <div>
          <div className={ContactStyle.contact_location}>
            <span className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faMapMarker} className={ContactStyle.icon}></FontAwesomeIcon>
            </span>
            <span className={ContactStyle.address}>Yangon,Myanmar</span>
          </div>
          <div className={ContactStyle.contact_location}>
            <span className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faPhone} className={ContactStyle.icon}></FontAwesomeIcon>
            </span>
            <span className={ContactStyle.address}>+959 123-456-789</span>
          </div>
          <div className={ContactStyle.contact_location}>
            <span className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faPencil} className={ContactStyle.icon}></FontAwesomeIcon>
            </span>
            <span className={ContactStyle.address}>designteam.ngs@gmail.com</span>
          </div>
        </div>
      </div>
      {/* contact-info end  */}

      {/* Opening-days start  */}
      <div className={ContactStyle.contact_days}>
        <h1 className={ContactStyle.contact_head}>Open Hours</h1>
        <table width="100%">
          <tr>
            <td className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faClock} className={ContactStyle.icon}></FontAwesomeIcon>
            </td>
            <td className={ContactStyle.closing_date}>Monday-Friday</td>
            <td className={ContactStyle.contact_time}>9:00 AM-5:00 PM</td>
          </tr>
          <tr>
            <td className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faClock} className={ContactStyle.icon}></FontAwesomeIcon>
            </td>
            <td className={ContactStyle.closing_date}>Saturday</td>
            <td className={ContactStyle.contact_time}>10:00 AM-3:00 PM</td>
          </tr>
          <tr>
            <td className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faClose} className={ContactStyle.icon}></FontAwesomeIcon>
            </td>
            <td className={ContactStyle.closing_date}>Sunday</td>
            <td className={ContactStyle.contact_time}>Closed</td>
          </tr>
          <tr>
            <td className={ContactStyle.contact_icon}>
              <FontAwesomeIcon icon={faClock} className={ContactStyle.icon}></FontAwesomeIcon>
            </td>
            <td className={ContactStyle.closing_date}>Holidays</td>
            <td className={ContactStyle.contact_time}>10:00-13:00</td>
          </tr>
        </table>
      </div>
      {/* Opening-days end  */}
    </div>
  );
};

const ContactFrom = () => {
  return (
    <div className={ContactStyle.contact_form_container}>
      <h1>Contact Form</h1>
      <form action="">
        <div className={ContactStyle.form_input_container}>
          <input className={ContactStyle.form_input} type="text" placeholder="NAME" />
          <input className={ContactStyle.form_input} type="text" placeholder="PHONE" />
        </div>
        <div className={ContactStyle.form_input_container}>
          <input className={ContactStyle.form_input} type="text" placeholder="EMAIL" />
          <input className={ContactStyle.form_input} type="text" placeholder="SUBJECT" />
        </div>
        <div className={ContactStyle.form_input_container}>
          <textarea
            className={ContactStyle.form_textarea}
            cols="30"
            rows="10"
            placeholder="MESSAGE"
          />
        </div>
        <button className={ContactStyle.form_button} onClick={(e)=>{e.preventDefault();}}>
        </button>
      </form>
    </div>
  );
};

function contact(contactContent) {
  const data = contactContent.contactContent

  return (
    <div >
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}><Link type="button" to={"/contact"} className={HeaderStyle.link}>{data.firstBreakCrumb}</Link></li>
              <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
              <li className={HeaderStyle.breakCrumbList} >{data.secondBreakCrumb}</li>
            </ol>
          </div>
        </div>
      </section>

      <div className={ContactStyle.contact_container}>

        <ContactFrom />
        <AddressList />
      </div>
    </div>
  );
}

export default contact;
