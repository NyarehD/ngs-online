import React, { useState } from "react";
import Slider from "react-slick";
import FooterCarouselStyle from "./footer-carousel.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";

//Import Image
import Img1 from "../../../assets/footer-carousel/01.jpg";
import Img2 from "../../../assets/footer-carousel/02.jpg";
import Img3 from "../../../assets/footer-carousel/03.jpg";
import Img4 from "../../../assets/footer-carousel/04.jpg";
import Img5 from "../../../assets/footer-carousel/05.jpg";
import Img6 from "../../../assets/footer-carousel/06.jpg";
import Img7 from "../../../assets/footer-carousel/07.jpg";
import Img8 from "../../../assets/footer-carousel/08.jpg";
import Img9 from "../../../assets/footer-carousel/09.jpg";
import Img10 from "../../../assets/footer-carousel/10.jpg";

//Create image arrays for looping
let Images = [
  { image: Img1, id: 1 },
  { image: Img2, id: 2 },
  { image: Img3, id: 3 },
  { image: Img4, id: 4 },
  { image: Img5, id: 5 },
  { image: Img6, id: 6 },
  { image: Img7, id: 7 },
  { image: Img8, id: 8 },
  { image: Img9, id: 9 },
  { image: Img10, id: 10 },
];

// Setting and Responsive for Slider
export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 452,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [toggleArrow, SetToggleArrow] = useState(Boolean);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Custom Arrow
  function SampleNextArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.nextArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        } `}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={onClick}
        ></FontAwesomeIcon>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.prevArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        }`}
      >
        <FontAwesomeIcon icon={faAngleLeft} onClick={onClick}></FontAwesomeIcon>
      </div>
    );
  }

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image);
  };

  const totalLength = Images.length;

  const handelRotationRight = () => {
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = Images[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = Images.filter((item) => {
      return Images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1  );
      const newUrl = Images[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = Images.filter((item) => {
      return Images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className={FooterCarouselStyle.slider}>
        <Slider {...settings} className={FooterCarouselStyle.carouselBox}>
          {/* The UI */}
          {Images.map((image, index) => (
            <div key={index} className={FooterCarouselStyle.imgDiv}>
              <img
                className={FooterCarouselStyle.carouselImg}
                onMouseEnter={() => SetToggleArrow(true)}
                onMouseLeave={() => SetToggleArrow(false)}
                src={image.image}
                alt=""
                onClick={() => handleClick(image.image, index)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            currentIndex={currentIndex}
            totalLength={totalLength}
          />
        )}
      </div>
    </div>
  );
}
