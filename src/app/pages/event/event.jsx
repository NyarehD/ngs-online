import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../App";
import ReactPaginate from "react-paginate";

// File
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import eventStyle from "./event.module.sass";
import HeaderStyle from "../../../core/components/header/header.module.sass";

// Image
import portf_1 from "../../../assets/event/01.jpg";
import portf_2 from "../../../assets/event/02.jpg";
import portf_3 from "../../../assets/event/03.jpg";
import portf_4 from "../../../assets/event/04.jpg";
import portf_5 from "../../../assets/event/05.jpg";
import portf_6 from "../../../assets/event/06.jpg";
import portf_7 from "../../../assets/event/07.jpg";
import portf_8 from "../../../assets/event/08.jpg";

// Font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSearch,
  faAngleRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";



const Event = (eventContent) => {
  const [value] = useContext(Context);
  const [pageNumber, setPageNumber] = useState(0);
  const data = eventContent.eventContent;
  const theme = value.mode === "dark" ? eventStyle.darkTheme : "";


  const [searchTerm, setSearchTerm] = useState("");
  const userPage = 5;
  const pagesVisited = pageNumber * userPage;

  const portfolio = [
    {
      id: 1,
      image: portf_1,
    },
    {
      id: 2,
      image: portf_2,
    },
    {
      id: 3,
      image: portf_3,
    },
    {
      id: 4,
      image: portf_4,
    },
    {
      id: 5,
      image: portf_5,
    },
    {
      id: 6,
      image: portf_6,
    },
  ];

  const photos = portfolio.map((cont) => {
    return (
      <div key={cont.id} className={eventStyle.photo_items}>
        <a href="#">
          <img src={cont.image} />
        </a>
      </div>
    );
  });

  const items = [
    {
      image: portf_1,
      id: 1,
      title: "Magna aliquyam erased",
      date: "March 12, 2018",
      time: "01:15 pm - 04:30 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum bibendum dui, nec malesuada urna laoreet non. Maecenas id semper nisi.",
    },
    {
      image: portf_2,
      id: 2,
      title: "Cupiditate ducimus ea eaque",
      date: "March 11, 2018",
      time: "02:15 pm - 03:50 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },
    {
      image: portf_3,
      id: 3,
      title: "Aliquam amet atque deleniti",
      date: "March 9, 2018",
      time: "03:15 pm - 05:30 pm",
      text: "Aliquam amet, atque deleniti dignissimos dolor ducimus eaque eos error et facere ipsam iste laboriosam molestias optio.",
    },
    {
      image: portf_4,
      id: 4,
      title: "Ad ipsam itaque molestias",
      date: "March 4, 2018",
      time: "03:00 pm - 04:30 pm",
      text: "Accusantium, asperiores culpa iusto molestias reiciendis repellat voluptatum? Ad ipsam itaque molestias quasi ratione.",
    },
    {
      image: portf_5,
      id: 5,
      title: "Magna aliquyam erased",
      date: "March 2, 2018",
      time: "05:15 pm - 07:10 pm",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam et dolore magna aliquyam erat. Vestibulum malesuada justo.",
    },
    {
      image: portf_6,
      id: 6,
      title: "Cupiditate ducimus ea eaque ",
      date: "Jan 30, 2018",
      time: "01:15 pm - 05:30 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },

    {
      image: portf_7,
      id: 7,
      title: "Aliquam amet atque deleniti ",
      date: "Jan 26, 2018",
      time: "05:45 pm - 04:40 pm",
      text: "Aliquam amet, atque deleniti dignissimos dolor ducimus eaque eos error et facere ipsam iste laboriosam molestias optio.",
    },

    {
      image: portf_8,
      id: 8,
      title: "Ad ipsam itaque molestias ",
      date: "Jan 20, 2018",
      time: "01:55 pm - 05:30 pm",
      text: "Accusantium, asperiores culpa iusto molestias reiciendis repellat voluptatum? Ad ipsam itaque molestias quasi ratione.",
    },
    {
      image: portf_1,
      id: 9,
      title: "Magna aliquyam erased",
      date: "March 16, 2018",
      time: "05:15 pm - 06:30 pm",
      text: "Duis leo magna, auctor id lorem eget, facilisis finibus tortor. Suspendisse potenti. Pellentesque suscipit leo sed arcu pretium, vel fermentum odio.",
    },

    {
      image: portf_2,
      id: 10,
      title: "Cupiditate ducimus ea eaque ",
      date: "Jan 10, 2018",
      time: "03:15 pm - 07:30 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },
  ];

  const pageCount = Math.ceil(items.length / userPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  const displayUsers = items
    .filter((item) =>{
      if (searchTerm === ""){
        return item;
      }else if ( item.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return item;
      }
    })
    .slice(pagesVisited, pagesVisited + userPage)
    .map((item, index) => {
      return (
        <div key={index}
          className={
            value.mode === "light" ? eventStyle.item : eventStyle.itemDark
          }
        >
          <div className={eventStyle.itemBox}>
            <div className={eventStyle.imageBox}>
              <img src={item.image} alt="" className={eventStyle.images} />
            </div>

            <div className={eventStyle.textBox}>
              <div>
                <h3>
                  <a
                    href={`/event/${item.id}`}
                    className={
                      value.mode === "light"
                        ? eventStyle.item_title
                        : eventStyle.item_titleDark
                    }
                  >
                    {item.title}
                  </a>
                </h3>
              </div>
              <div className="">
                <h4
                  className={
                    value.mode === "light"
                      ? eventStyle.datetime
                      : eventStyle.datetimeDark
                  }
                >
                  <span>
                    <span className={eventStyle.icon}>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>{item.date}</span>
                  </span>
                  <span>
                    <span className={eventStyle.icon}>
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span>{item.time}</span>
                  </span>
                </h4>
              </div>
              <div>
                <p
                  className={
                    value.mode === "light"
                      ? eventStyle.item_text
                      : eventStyle.item_textDark
                  }
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const categories = [
    {
      name: "Internet Provider",
      amount: "12",
    },
    {
      name: "TV Solution",
      amount: "8",
    },
    {
      name: "Digital Trade",
      amount: "10",
    },
    {
      name: "Technologies",
      amount: "21",
    },
    {
      name: "E-Commerce",
      amount: "6",
    },
  ];
  const EventCategories = categories.map((category , index) => (
    <ul key={index}>
      <li className={eventStyle.listCategory} >
        <span
          className={
            value.mode === "light"
              ? eventStyle.listItem
              : eventStyle.listItemDrak
          }
        >
          {category.name}
        </span>
        <span
          className={
            value.mode === "light"
              ? eventStyle.listItem
              : eventStyle.listItemDark
          }
        >
          ({category.amount})
        </span>
      </li>
    </ul>
  ));
  return (
    <div className={theme}>
      <section className={HeaderStyle.box}>
        <HeaderCarousel />
        <div className={HeaderStyle.bannerContent}>
          <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
          <div className={HeaderStyle.breakCrumb}>
            <ol className={HeaderStyle.breakCrumbLists}>
              <li className={HeaderStyle.breakCrumbList}>
                <Link
                  type="button"
                  to={"/event-list"}
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
                {data.secondBreakCrumb}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className={eventStyle.container}>
        <div className={eventStyle.left}>
          <div className={eventStyle.items}> {displayUsers} </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
              value.mode === "light"
                ? eventStyle.btns
                : eventStyle.darkThemePaginationBtns
            }
            previousLinkClassName={eventStyle.buttonPaginate}
            nextLinkClassName={eventStyle.buttonPaginate}
            disabledClassName={eventStyle.buttonPaginateDisabled}
            activeClassName={eventStyle.activePaginate}
          />
        </div>
        <div className={eventStyle.right}>
          <div className={eventStyle.search}>
            <h2 className={eventStyle.title}>Search</h2>
            <form action="" className={`${eventStyle.form_event} ${theme}`}>
              <input
                className={`${eventStyle.placeholder} ${theme}`}
                type="search"
                placeholder="Search Keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={eventStyle.btnSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
          <div className={eventStyle.categories}>
            <h2 className={eventStyle.title}>Categories</h2>
            {EventCategories}
          </div>
          <div className={eventStyle.recent_portfolio}>
            <h2 className={eventStyle.title}>Recent Portfolio</h2>
            <div className={eventStyle.photo}>{photos}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;