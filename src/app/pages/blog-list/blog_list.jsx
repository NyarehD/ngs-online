import React, { useState, useEffect, useContext, useRef } from "react";
import BlogListStyle from "./blog-list.module.sass";
import Image from "../../../assets/event/01.jpg";
import api from "../../../api/mockApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faComments,
  faHeart,
  faMagnifyingGlass,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import HeaderStyle from "../../../core/components/header/header.module.sass";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import { Context } from "../../../App";

const Blog = ({ post, theme }) => {
  return (
    <div
      className={`${BlogListStyle.blog} ${
        theme === "dark" ? BlogListStyle.dark_theme_post_bg : ""
      }`}
    >
      <div className={BlogListStyle.imageSection}>
        <div className={BlogListStyle.blogImage}>
          <img src={Image} alt="" />
        </div>
        <div className={BlogListStyle.authorImage}>
          <img src={Image} alt="" />
        </div>
      </div>

      <div className={BlogListStyle.contentSection}>
        <div className={BlogListStyle.blogtHeader}>
          <a href="#" className={BlogListStyle.date}>
            {post.date}
            <br />
            <span>{post.month}</span>
          </a>
          <div className={BlogListStyle.header}>
            <div className={BlogListStyle.tagList}>
              <FontAwesomeIcon icon={faTags} className={BlogListStyle.i} />
              <span className={BlogListStyle.tag_container}>
                {post.tag.map((tag , index) => (
                  <a key={index} href="#" className={BlogListStyle.tag}>
                    {tag}
                  </a>
                ))}
              </span>
            </div>
            <div className={BlogListStyle.title}>
              <a
                href={`/blog/${post.id}`}
                className={theme === "dark" ? BlogListStyle.dark_theme_text : ""}
              >
                {post.title}
              </a>
            </div>
          </div>
        </div>
        <div className={BlogListStyle.blogBody}>
          <p
            className={`${BlogListStyle.defaultP}  ${
              theme === "dark" ? BlogListStyle.dark_theme_text : ""
            }`}
          >
            {post.body}
          </p>
        </div>
        <div className={BlogListStyle.blogFooter}>
          <button className={BlogListStyle.blogButton}>
            <span className={` ${theme === "dark" ? BlogListStyle.dark_theme_post_button : ""}`}>
              Read More
            </span>
          </button>
          <div className={BlogListStyle.action}>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faComments} className={BlogListStyle.icons} />
              <a href="#" className={` ${theme === "dark" ? BlogListStyle.dark_theme_text : ""}`}>
                {post.comment} COMMENTS
              </a>
            </span>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faHeart} className={BlogListStyle.icons} />
              <a href="#" className={` ${theme === "dark" ? BlogListStyle.dark_theme_text : ""}`}>
                {post.like} LIKES
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogContainer = ({
  togglePosts,
  currentPosts,
  pageNumber,
  paginate,
  currentPostsByFilter,
  currentPage,
  theme,
}) => {
  return (
    <div className={BlogListStyle.blogList_left_container}>
      {/* start Blog Post */}
      {togglePosts
        ? currentPostsByFilter?.map((post, i) => <Blog theme={theme} key={i} post={post} />)
        : currentPosts?.map((post, i) => <Blog theme={theme} key={i} post={post} />)}
      {/* end Blog Post */}

      {/*start pagination */}
      <nav className={BlogListStyle.pagination_Section}>
        <ul className={BlogListStyle.pagination_container}>
          {pageNumber?.map((num) => (
            <li
              key={num}
              className={`${BlogListStyle.pagination_item} ${
                currentPage == num && BlogListStyle.active
              } ${theme === "dark" ? BlogListStyle.dark_theme_text : ""}`}
              onClick={() => paginate(num)}
            >
              {num}
            </li>
          ))}
        </ul>
      </nav>
      {/*end pagination */}
    </div>
  );
};

const BlogHelperContainer = ({
  posts,
  setPostsByFilter,
  filterByTag,
  setTogglePosts,
  setCurrentPage,
  filterByCategory,
  filterBySearchKeyWord,
  tags,
  categroies,
  theme,
}) => {
  const searchRef = useRef(null);

  const showPostByCategroy = (categoryName) => {
    if (categoryName == "All") {
      setCurrentPage(1);
      return setTogglePosts(false);
    }
    const data = filterByCategory(categoryName);
    showFilterPostProcess(data);
  };

  const showPostByTag = (tagName) => {
    const data = filterByTag(tagName);
    showFilterPostProcess(data);
  };

  const showPostBySearchKeyword = (event) => {
    event.preventDefault();
    const searchKey = searchRef.current.value;
    const data = filterBySearchKeyWord(searchKey);
    showFilterPostProcess(data);
  };

  const showFilterPostProcess = (data) => {
    setPostsByFilter(data);
    setCurrentPage(1);
    setTogglePosts(true);
  };

  // generate Cat Name and no of post with that cat name
  const categroiesWithNoOfPost = categroies.map((cat) => {
    const noOfPost = filterByCategory(cat);
    return { catName: cat, noOfPost: noOfPost.length };
  });
  categroiesWithNoOfPost.unshift({ catName: "All", noOfPost: posts.length });

  return (
    <div className={BlogListStyle.blogList_right_container}>
      {/* search  */}
      <div className={`${BlogListStyle.search} ${BlogListStyle.mb}`}>
        <h2
          className={`${BlogListStyle.headertag} ${
            theme === "dark" ? BlogListStyle.dark_theme_text : ""
          }`}
        >
          Search
        </h2>
        <form action="" className={BlogListStyle.form_search} onSubmit={showPostBySearchKeyword}>
          <input
            ref={searchRef}
            type="text"
            className={`${BlogListStyle.search_box} ${
              theme === "dark" ? BlogListStyle.dark_search_box : ""
            }`}
            placeholder="Search KeyWord"
          />
          <button type="sumbit" className={BlogListStyle.btnSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      {/* category  */}
      <div className={`${BlogListStyle.category_container} ${BlogListStyle.mb}`}>
        <h2
          className={`${BlogListStyle.headertag} ${
            theme === "dark" ? BlogListStyle.dark_theme_text : ""
          }`}
        >
          Categories
        </h2>
        <ul className={BlogListStyle.categories}>
          {categroiesWithNoOfPost.map((category, index) => (
            <li
              key={index}
              className={BlogListStyle.category}
              onClick={() => showPostByCategroy(category.catName)}
            >
              <span className={theme === "dark" ? BlogListStyle.dark_theme_text : ""}>
                {category.catName}
              </span>
              <span className={BlogListStyle.categoryQuantity}>{category.noOfPost}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* recent post  */}
      <div className={`${BlogListStyle.recent_post_container} ${BlogListStyle.mb}`}>
        <h2
          className={`${BlogListStyle.headertag} ${
            theme === "dark" ? BlogListStyle.dark_theme_text : ""
          }`}
        >
          Recent Posts
        </h2>
        <ul className={BlogListStyle.recent_posts}>
          {posts
            ?.map((post, i) => (
              <li key={i} className={BlogListStyle.recent_post}>
                <img src={Image} className={BlogListStyle.recent_post_img} alt="" srcSet="" />
                <div>
                  <h4
                    className={`${BlogListStyle.recent_post_header} ${
                      theme === "dark" ? BlogListStyle.dark_theme_text : ""
                    }`}
                  >
                    <a href="#"> {post.title} </a>
                  </h4>
                  <p className={BlogListStyle.recent_post_date}>
                    {post.month} {post.date}
                  </p>
                </div>
              </li>
            ))
            .slice(0, 3)}
        </ul>
      </div>

      {/* Recent Portfolio  */}
      <div className={`${BlogListStyle.recent_portfolio_container} ${BlogListStyle.mb}`}>
        <h2
          className={`${BlogListStyle.headertag} ${
            theme === "dark" ? BlogListStyle.dark_theme_text : ""
          }`}
        >
          Recent Portfolio
        </h2>
        <div className={BlogListStyle.portfolio_photos}>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
          <div className={BlogListStyle.portfolio_photo}>
            <a href="#">
              <img src={Image} alt="" srcSet="" />
            </a>
          </div>
        </div>
      </div>

      {/* tag  */}
      <div className={`${BlogListStyle.tag_cloud_container} ${BlogListStyle.mb}`}>
        <h2
          className={`${BlogListStyle.headertag} ${
            theme === "dark" ? BlogListStyle.dark_theme_text : ""
          }`}
        >
          Tags
        </h2>
        <div className={BlogListStyle.tag_clouds}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${BlogListStyle.tag_cloud} ${
                theme === "dark" ? BlogListStyle.dark_theme_tag_cloud : ""
              }`}
              onClick={() => showPostByTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function BlogList(blogListContent) {
  const [value] = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [togglePosts, setTogglePosts] = useState(false);

  const [postsByFilter, setPostsByFilter] = useState([]);
  const [tags, setTags] = useState([]);
  const [categroies, setCategories] = useState([]);

  const data = blogListContent.blogListContent;
  console.log(data);

  //start filter function By tag or category
  const filterByCategory = (categoryName) => {
    return posts.filter((post) => post.category === categoryName);
  };

  const filterByTag = (tagName) => {
    return posts.filter((post) => post.tag.includes(tagName));
  };

  const filterBySearchKeyWord = (searchKeyWord) => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
        post.body.toLowerCase().includes(searchKeyWord.toLowerCase())
    );
  };
  //end filter function By tag or category

  // start fetch api insturction
  const fetchData = async (url, set) => {
    try {
      const { data } = await api.get(url);
      set(data);
    } catch (error) {
      console.log({ error });
    }
  };
  // end fetch api insturction

  useEffect(() => {
    fetchData("/blog-posts", setPosts);
    fetchData(`/tags`, setTags);
    fetchData(`/categories`, setCategories);
  }, []);

  // console.log({ categroies,posts,tags });

  // start pagination instruction
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsByFilter =
    postsByFilter && postsByFilter.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = [];
  //--->for dynamic pagination by tag name
  const paginationLength = togglePosts
    ? postsByFilter.length / postPerPage
    : posts.length / postPerPage;

  // console.log({paginationLength});

  for (let i = 1; i <= Math.ceil(paginationLength); i++) {
    pageNumber.push(i);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // end pagination instruction

  // console.log({ postsByFilter });

  const BlogContainerPorps = {
    togglePosts,
    currentPosts,
    pageNumber,
    paginate,
    currentPostsByFilter,
    currentPage,
  };
  const BlogHelperContainerProps = {
    setTogglePosts,
    posts,
    setPostsByFilter,
    setCurrentPage,
    tags,
    categroies,
    filterByCategory,
    filterByTag,
    filterBySearchKeyWord,
  };

  return (
    <div>
      <section className={`${HeaderStyle.box}`}>
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
                <FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight}></FontAwesomeIcon>
              </li>
              <li className={HeaderStyle.breakCrumbList}>{data.secondBreakCrumb}</li>
            </ol>
          </div>
        </div>
      </section>
      <div
        className={`${BlogListStyle.bloglist_container} ${
          value.mode === "dark" ? BlogListStyle.bloglist_container_dark : ""
        }`}
      >
        <BlogContainer theme={value.mode} {...BlogContainerPorps} />
        <BlogHelperContainer theme={value.mode} {...BlogHelperContainerProps} />
      </div>
    </div>
  );
}

export default BlogList;
