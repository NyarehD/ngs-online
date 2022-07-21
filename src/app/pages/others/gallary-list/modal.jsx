import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalStyle from "./modal.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faMagnifyingGlassMinus,
  // faMagnifyingGlassPlus,
  // faCompress,
  // faExpand,
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${ModalStyle.rotation_btn} ${ModalStyle.r_btn}`} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};

const PreArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${ModalStyle.rotation_btn} ${ModalStyle.l_btn}`} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

const SliderImg = ({ ModalData, index, setCurrentImgIndex }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    afterChange: (current) => setCurrentImgIndex(current + 1),
  };
  return (
    <Slider {...settings}>
      {ModalData.map((data) => (
        <div className={ModalStyle.slider_img}>
          <img srcSet={data.image} src={data.image} />
        </div>
      ))}
    </Slider>
  );
};

function Modal({ toggleHandler, ModalData, currentImageID }) {
  const [expand, setExpand] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const index = ModalData.findIndex((elem) => elem["id"] == currentImageID);
  const [currentImgIndex, setCurrentImgIndex] = useState(index + 1);

  return createPortal(
    <>
      <div className={`${ModalStyle.image_preview_container} ${zoomIn && ModalStyle.zoom_in}`}>
        <div className={ModalStyle.image_preview_nav}>
          <div className={ModalStyle.image_breadcrumb}>
            <span>
              {currentImgIndex}/{ModalData.length}
            </span>
          </div>
          <div className={ModalStyle.image_helper_action}>
            {/* <span className={ModalStyle.zoom_icon_container}>
              <FontAwesomeIcon
                onClick={() => setZoomIn((pre) => !pre)}
                icon={zoomIn ? faMagnifyingGlassMinus : faMagnifyingGlassPlus}
              />
            </span> */}
            {/* <span>
              <FontAwesomeIcon icon={expand ? faCompress : faExpand} />
            </span> */}
            <span>
              <FontAwesomeIcon icon={faXmark} onClick={() => toggleHandler()} />
            </span>
          </div>
        </div>

        <div className={ModalStyle.image_preview_body}>
          <SliderImg ModalData={ModalData} index={index} setCurrentImgIndex={setCurrentImgIndex} />
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
