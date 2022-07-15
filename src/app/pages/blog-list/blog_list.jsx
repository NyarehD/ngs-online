import React, { useState } from "react";
import BlogListStyle from "./blog-list.module.sass";
import Image from "../../../assets/event/01.jpg";
import api from "../../../api/blog-posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faComments, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Blog = ({ post }) => {
  return (
    <div className={BlogListStyle.blog}>
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
                <a href="#" className={BlogListStyle.tag}>
                  {post.tag[0]}
                </a>
                <a href="#" className={BlogListStyle.tag}>
                  {post.tag[1]}
                </a>
                <a href="#" className={BlogListStyle.tag}>
                  {post.tag[2]}
                </a>
              </span>
            </div>
            <div className={BlogListStyle.title}>
              <a href="#">{post.title}</a>
            </div>
          </div>
        </div>
        <div className={BlogListStyle.blogBody}>
          <p className={BlogListStyle.defaultP}>{post.body}</p>
        </div>
        <div className={BlogListStyle.blogFooter}>
          <button className={BlogListStyle.blogButton}>
            <span>Read More</span>
          </button>
          <div className={BlogListStyle.action}>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faComments} className={BlogListStyle.icons} />
              <a href="#">{post.comment} COMMENTS</a>
            </span>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faHeart} className={BlogListStyle.icons} />
              <a href="#">{post.like} LIKES</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogContainer = ({ togglePosts, currentPosts, pageNumber, paginate, currentPostsByTag,currentPage }) => {
  return (
    <div className={BlogListStyle.blogList_left_container}>

      {/* start Blog Post */}
      {togglePosts
        ? currentPostsByTag?.map((post, i) => <Blog key={i} post={post} />)
        : currentPosts?.map((post, i) => <Blog key={i} post={post} />)}
      {/* end Blog Post */}

      {/*start pagination */}
      <nav className={BlogListStyle.pagination_Section}>
        <ul  className={BlogListStyle.pagination_container}>
          {pageNumber?.map((num) => (
            <li key={num}className={`${BlogListStyle.pagination_item} ${currentPage==num&&BlogListStyle.active}`} onClick={() => paginate(num)}>
              {num}
            </li>
          ))}
        </ul>
      </nav>
      {/*end pagination */}


    </div>
  );
};

const BlogHelperContainer = ({ posts, fetchByTag, setTogglePosts }) => {
  const toggle = (tagId) => {
    fetchByTag(tagId);
    setTogglePosts(true);
  };
  return (
    <div className={BlogListStyle.blogList_right_container}>

      {/* search  */}
      <div className={`${BlogListStyle.search} ${BlogListStyle.mb}`}>
        <h2 className={BlogListStyle.headertag}>Search</h2>
        <form action="" className={BlogListStyle.form_search}>
          <input
            type="search"
            className={BlogListStyle.search_box}
            value=""
            placeholder="Search KeyWord"
          />
          <button className={BlogListStyle.btnSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      {/* aboout  */}
      <div className={`${BlogListStyle.about} ${BlogListStyle.mb}`}>
        <h2 className={BlogListStyle.headertag}>About US</h2>
        <p className={`${BlogListStyle.defaultP} ${BlogListStyle.mb}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus id ipsum
          cupiditate saepe doloremque quisquam velit numquam reprehenderit rerum!
        </p>
        <button className={BlogListStyle.blogButton}>
          <span>Read More</span>
        </button>
      </div>

      {/* category  */}
      <div className={`${BlogListStyle.category_container} ${BlogListStyle.mb}`}>
        <h2 className={BlogListStyle.headertag}>Categories</h2>
        <ul className={BlogListStyle.categories}>
          <li className={BlogListStyle.category} onClick={() => toggle(1)}>
            <a href="#">Internet Provider one </a>
            <span>(9)</span>
          </li>
          <li className={BlogListStyle.category} onClick={() => toggle(2)}>
            <a href="#">Internet Provider two </a>
            <span>(9)</span>
          </li>
          <li className={BlogListStyle.category} onClick={() => toggle(3)}>
            <a href="#">Internet Provider three </a>
            <span>(9)</span>
          </li>
        </ul>
      </div>

      {/* recent post  */}
      <div className={`${BlogListStyle.recent_post_container} ${BlogListStyle.mb}`}>
        <h2 className={BlogListStyle.headertag}>Recent Posts</h2>
        <ul className={BlogListStyle.recent_posts}>
          {posts
            ?.map((post, i) => (
              <li key={i} className={BlogListStyle.recent_post}>
                <img src={Image} className={BlogListStyle.recent_post_img} alt="" srcSet="" />
                <div>
                  <h4 className={BlogListStyle.recent_post_header}>
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
        <h2 className={BlogListStyle.headertag}>Recent Portfolio</h2>
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
        <h2 className={BlogListStyle.headertag}>Tags</h2>
        <div className={BlogListStyle.tag_clouds}>
          <a href="#" className={BlogListStyle.tag_cloud}>
            Cable
          </a>
          <a href="#" className={BlogListStyle.tag_cloud}>
            IpTv
          </a>
          <a href="#" className={BlogListStyle.tag_cloud}>
            Internet
          </a>
          <a href="#" className={BlogListStyle.tag_cloud}>
            Provider Service
          </a>
          <a href="#" className={BlogListStyle.tag_cloud}>
            Router Setup
          </a>
        </div>
      </div>

    </div>
  );
};

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [postsByTag, setPostsByTag] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [togglePosts, setTogglePosts] = useState(false);

 

  // start fetch api insturction 
  const fetchByTag = async (tagId) => {
    const response = await api.get(`/blog-posts?tagId=${tagId}`);
    setPostsByTag(response.data);
  };
  useEffect(() => {
   const fetchBlogs = async () => {
    const response = await api.get("/blog-posts");
    setPosts(response.data);
  };
    fetchBlogs();
  }, []);
  // end fetch api insturction 


  // start pagination instruction 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsByTag = postsByTag.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = [];
        //--->for dynamic pagination by tag name 
  const paginationLength = togglePosts ? postsByTag.length / postPerPage:posts.length / postPerPage;
  
  console.log({paginationLength});
  
  for (let i = 1; i <= Math.ceil(paginationLength); i++) {
    pageNumber.push(i);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   // end pagination instruction 



   const BlogContainerPorps = {
    togglePosts, currentPosts, pageNumber, paginate, currentPostsByTag,currentPage
  }
  const BlogHelperContainerProps = {
        setTogglePosts,posts,fetchByTag,postsByTag,
  }

  return (
    <div className={BlogListStyle.bloglist_container}>
      <BlogContainer
        {...BlogContainerPorps}
      />
      <BlogHelperContainer
        {...BlogHelperContainerProps}
      />
    </div>
  );
}

export default BlogList;
