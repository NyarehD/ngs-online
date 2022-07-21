import React, { useEffect, useState } from "react";
import api from "../../../api/mockApi";
import BlogStyle from "./blog.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faComments, faHeart , faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"

import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";

function Blog(blogContent) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const data = blogContent.blogContent

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("/blog-posts");
        if (response && response.data) {
          setBlogPosts(response.data);
          console.log(response.data);
        } else {
          console.log("response but no data");
        }
      } catch (err) {
        console.log("Error : " + err.message);
      }
    };

    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(blogPosts.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber ) =>{
    setCurrentPage(pageNumber);
  }


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
      <div className={BlogStyle.container}>
        {currentPosts.map((post, index) => (
          <div key={index} className={BlogStyle.post}>
            <div className={BlogStyle.imageSection}>
              <div className={BlogStyle.postImage}>
                <img src={post.image} alt="" />
              </div>

              <div className={BlogStyle.authorImage}>
                <img src={post.author} alt="" />
              </div>
            </div>

            <div className={BlogStyle.contentSection}>
              <div className={BlogStyle.postHeaderSection}>
                <div className={BlogStyle.timeline}>
                  <h1>{post.date}</h1>
                  <h4>{post.month}</h4>
                </div>

                <div className={BlogStyle.content}>
                  <div className={BlogStyle.tagList}>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                    <ul className={BlogStyle.tagName}>
                      {post.tag.map((singleTag) => (
                        <li key={singleTag} className={BlogStyle.tag}>{singleTag}</li>
                      ))}
                    </ul>
                  </div>
                  <h2 className={BlogStyle.title}>{post.title}</h2>
                </div>
              </div>

              <div className={BlogStyle.postBodySection}>
                <div className={BlogStyle.postBody}>
                  <p>{post.body}</p>
                </div>

                <div className={BlogStyle.callToAction}>
                  <div className={BlogStyle.row}>
                    <div>
                      <button className={BlogStyle.readMoreButton}></button>
                    </div>
                    <div className={BlogStyle.engagement}>
                      <div className={BlogStyle.comment}>
                        <FontAwesomeIcon
                          icon={faComments}
                          className={BlogStyle.icon}
                        ></FontAwesomeIcon>
                        <span className={BlogStyle.engagementQuantity}>
                          {post.comment}
                        </span>
                        Comments
                      </div>

                      <div className={BlogStyle.like}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={BlogStyle.icon}
                        ></FontAwesomeIcon>
                        <span className={BlogStyle.engagementQuantity}>
                          {post.like}
                        </span>
                        Likes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <nav className={BlogStyle.pagination}>
          <ul className={BlogStyle.itemsList}>
            {pageNumber.map((number) => (
              <li key={number} onClick={() => paginate(number)} className={BlogStyle.itemList}>
                <a href="#" className={BlogStyle.button}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Blog;
