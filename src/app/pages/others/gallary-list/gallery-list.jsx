import react, { useState } from "react";
import IsoTopeGrid from "react-isotope";
import galleryListStyle from "./gallery-list.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "../../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../../core/components/header-carousel/header-carousel";
import Modal from "./modal";

import image1 from "../../../../assets/gallery-list/01.jpg";
import image2 from "../../../../assets/gallery-list/02.jpg";
import image3 from "../../../../assets/gallery-list/03.jpg";
import image4 from "../../../../assets/gallery-list/04.jpg";
import image5 from "../../../../assets/gallery-list/05.jpg";
import image6 from "../../../../assets/gallery-list/06.jpg";
import image7 from "../../../../assets/gallery-list/07.jpg";
import image8 from "../../../../assets/gallery-list/08.jpg";
import image9 from "../../../../assets/gallery-list/09.jpg";
import image10 from "../../../../assets/gallery-list/10.jpg";
import image11 from "../../../../assets/gallery-list/11.jpg";
import image12 from "../../../../assets/gallery-list/12.jpg";
import { Link } from "react-router-dom";
const defaultFilters = [
  { label: "ALL", isChecked: true },
  { label: "VOIP", isChecked: false },
  { label: "TECHNOLOGIES", isChecked: false },
  { label: "INTERNET", isChecked: false },
  { label: "CABLE", isChecked: false },
  { label: "IPTV", isChecked: false },
];

const CardLayOut = [
  {
    id: "1",
    filter: ["VOIP", "ALL"],
    tag: ["VOIP"],
    title: "literally a blur image",
    image: image1,
  },
  {
    id: "2",
    filter: ["VOIP", "ALL"],
    tag: ["VOIP"],
    title: "literally a blur image",
    image: image2,
  },
  {
    id: "3",
    filter: ["TECHNOLOGIES", "ALL"],
    tag: ["TECHNOLOGIES"],
    title: "literally a blur image",
    image: image3,
  },
  {
    id: "4",
    filter: ["TECHNOLOGIES", "ALL"],
    tag: ["TECHNOLOGIES"],
    title: "literally a blur image",
    image: image4,
  },
  {
    id: "5",
    filter: ["INTERNET", "ALL"],
    tag: ["INTERNET"],
    title: "literally a blur image",
    image: image5,
  },
  {
    id: "6",
    filter: ["INTERNET", "ALL"],
    tag: ["INTERNET"],
    title: "literally a blur image",
    image: image6,
  },
  {
    id: "7",
    filter: ["CABLE", "ALL"],
    tag: ["CABLE"],
    title: "literally a blur image",
    image: image7,
  },
  {
    id: "8",
    filter: ["CABLE", "ALL"],
    tag: ["CABLE"],
    title: "literally a blur image",
    image: image8,
  },
  {
    id: "9",
    filter: ["IPTV", "ALL"],
    tag: ["IPTV"],
    title: "literally a blur image",
    image: image9,
  },
  {
    id: "10",
    filter: ["IPTV", "ALL"],
    tag: ["IPTV"],
    title: "literally a blur image",
    image: image10,
  },
  {
    id: "11",
    filter: ["CABLE", "ALL"],
    tag: ["CABLE"],
    title: "literally a blur image",
    image: image11,
  },
  {
    id: "12",
    filter: ["VOIP", "ALL"],
    tag: ["VOIP"],
    title: "literally a blur image",
    image: image12,
  },
];

function getLayouts(width) {
  const mobile = width <= 575 && "mobile";
  const tablet = width > 575 && width <= 800 && "tablet";
  const laptop = width > 800 && width <= 1200 && "laptop";
  const computer = width > 1200 && "computer";
  const device = mobile || tablet || computer || laptop;
  switch (device) {
    case "mobile":
      return [1, window.innerWidth - 5, window.innerWidth - 80];
    case "tablet":
      return [2, window.innerWidth / 2 + 5, Math.round(window.innerWidth / 3) + 40];
    case "laptop":
      return [3, Math.round(window.innerWidth / 3) + 9, Math.round(window.innerWidth / 3) - 25];
    case "computer":
      return [4, window.innerWidth / 4 + 10, window.innerWidth / 4 - 20];
    default:
      return [0, 0, 0];
  }
}
export default function GalleryList(galleryListContent) {
  const data = galleryListContent.galleryListContent;
  const [filters, updateFilters] = useState(defaultFilters);
  const [tag, setTag] = useState("ALL");
  const [toggleModal, setToggleModal] = useState(false);
  const [currentImgId, setCurrentImgId] = useState(null);
  const [[columns, unitWidth, unitHeight], setLayout] = useState(getLayouts(window.innerWidth));
  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;
    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          setTag(f.label);
          return {
            ...f,
            isChecked: checked,
          };
        }
        return {
          ...f,
          isChecked: false,
        };
      })
    );
  };

  //start data for Modal Component
  const ModalData =
    tag === "ALL" ? CardLayOut : CardLayOut.filter((data) => data.tag.includes(tag));
  const showModal = (id) => {
    setCurrentImgId(id);
    toggleHandler();
  };
  const toggleHandler = () => {
    return setToggleModal((pre) => !pre);
  };
  //end data for Modal Component

  return (
    <div>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}>
                <Link type="button" to={"/gallery"} className={HeaderStyle.link}>
                  {data.firstBreakCrumb}
                </Link>
              </li>
              <li className={HeaderStyle.breakCrumbList}>
                <FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight}></FontAwesomeIcon>
              </li>
              <li className={HeaderStyle.breakCrumbList}>{data.secondBreakCrumb}</li>
            </ol>
          </div>
        </div>
      </section>
      <div className={galleryListStyle.container}>
        <div className={galleryListStyle.tagsContainer}>
          {filters.map((filter) => (
            <div className={galleryListStyle.tagItem} key={filter.label}>
              <input
                className={galleryListStyle.tag}
                type="checkBox"
                id={filter.label}
                value={filter.label}
                onChange={onFilter}
                checked={filter.isChecked}
              />
              <label
                htmlFor={filter.label}
                className={
                  tag === filter.label ? galleryListStyle.basicLinkColor : galleryListStyle.tagText
                }
              >
                {filter.label}
              </label>
            </div>
          ))}
        </div>

        <div
          style={{
            height: (unitHeight + 20) * Math.ceil(CardLayOut.length / columns) + "px",
            marginLeft: "-8px",
          }}
        >
          <IsoTopeGrid
            gridLayout={CardLayOut}
            unitWidth={unitWidth - 15}
            unitHeight={unitHeight}
            filters={filters}
            noOfCols={columns}
          >
            {CardLayOut.map((card, index) => (
              <div key={card.id} className={galleryListStyle.card}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: unitHeight - 80 + "px",
                    zIndex: 5,
                  }}
                >
                  <div className={galleryListStyle.imageContainerBg}>
                    <FontAwesomeIcon
                      onClick={() => showModal(card.id)}
                      icon={faSearch}
                      className={galleryListStyle.imageZoomInIcon}
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    style={{ width: "100%", height: unitHeight - 80 + "px" }}
                    className={galleryListStyle.img}
                    src={card.image}
                  />
                </div>
                <p
                  className={
                    card.tag.some((tagName) => tagName === tag)
                      ? galleryListStyle.textPink
                      : galleryListStyle.textBlue
                  }
                >
                  {card.tag}
                </p>
                <h2 className={galleryListStyle.basicLinkColorHover}>{card.title}</h2>
              </div>
            ))}
          </IsoTopeGrid>
        </div>
        <div className={galleryListStyle.loadMore}>
          <a href="#" className={galleryListStyle.loadMoreLink}>
            <span className={galleryListStyle.loadMoreText}>LOAD MORE</span>
          </a>
        </div>
      </div>
      {toggleModal && (
        <Modal ModalData={ModalData} currentImageID={currentImgId} toggleHandler={toggleHandler} />
      )}
    </div>
  );
}
