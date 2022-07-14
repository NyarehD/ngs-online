import react from "react";
import BlogListStyle from "./blog-list.module.sass";
import Image from "../../../assets/event/01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faComments, faHeart ,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
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
            02
            <br />
            <span>OCT</span>
          </a>
          <div className={BlogListStyle.header}>
            <div className={BlogListStyle.tagList}>
              <FontAwesomeIcon icon={faTags} className={BlogListStyle.i}/>
              <span className={BlogListStyle.tag_container}>
                <a href="#" className={BlogListStyle.tag}>
                  Internet
                </a>
                <a href="#" className={BlogListStyle.tag}>
                  cable
                </a>
                <a href="#" className={BlogListStyle.tag}>
                  Iptv
                </a>
              </span>
            </div>
            <div className={BlogListStyle.title}>
              <a href="#">Sample Post With Image</a>
            </div>
          </div>
        </div>
        <div className={BlogListStyle.blogBody}>
          <p className={BlogListStyle.defaultP}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at porro
            delectus. Harum sapiente tempore et aut. Sed repellendus itaque esse vitae quae!
            Incidunt suscipit voluptate illum, qui aliquid earum!
          </p>
        </div>
        <div className={BlogListStyle.blogFooter}>
          <button className={BlogListStyle.blogButton}>
            <span>Read More</span>
          </button>
          <div className={BlogListStyle.action}>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faComments} className={BlogListStyle.icons} />
              <a href="#">5 COMMENTS</a>
            </span>
            <span className={BlogListStyle.reaction}>
              <FontAwesomeIcon icon={faHeart} className={BlogListStyle.icons} />
              <a href="#">36 LIKES</a>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

const BlogContainer = () => {
  return (
    <div className={BlogListStyle.blogList_left_container}>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

const BlogHelperContainer = () => {
  return (
    <div className={BlogListStyle.blogList_right_container}>

        <div className={`${BlogListStyle.search} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>Search</h2>
          <form action="" className={BlogListStyle.form_search}>
            <input type="search" className={BlogListStyle.search_box} value="" placeholder="Search KeyWord" />
            <button className={BlogListStyle.btnSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </form>
        </div>

        <div className={`${BlogListStyle.about} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>About US</h2>
          <p className={`${BlogListStyle.defaultP} ${BlogListStyle.mb}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus id ipsum
            cupiditate saepe doloremque quisquam velit numquam reprehenderit rerum!
          </p>
          <button className={BlogListStyle.blogButton}><span>Read More</span></button>
        </div>

        <div className={`${BlogListStyle.category_container} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>Categories</h2>
          <ul className={BlogListStyle.categories}>
            <li className={BlogListStyle.category}>
              <a href="#">Internet Provider </a>
              <span>(12)</span>
            </li>
            <li className={BlogListStyle.category}>
              <a href="#">Internet Provider </a>
              <span>(12)</span>
            </li>
            <li className={BlogListStyle.category}>
              <a href="#">Internet Provider </a>
              <span>(12)</span>
            </li>
            <li className={BlogListStyle.category}>
              <a href="#">Internet Provider </a>
              <span>(12)</span>
            </li>
          </ul>
        </div>

        <div className={`${BlogListStyle.recent_post_container} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>Recent Posts</h2>
          <ul className={BlogListStyle.recent_posts}>
            <li className={BlogListStyle.recent_post}>
              <img src={Image} className={BlogListStyle.recent_post_img} alt="" srcset="" />
              <div>
                <h4 className={BlogListStyle.recent_post_header}>
                  <a href="#"> Lorem ipsum dolor sit amet consectetur </a>
                </h4>
                <p className={BlogListStyle.recent_post_date}>September 01, 2018</p>
              </div>
            </li>
              <li className={BlogListStyle.recent_post}>
              <img src={Image} className={BlogListStyle.recent_post_img} alt="" srcset="" />
              <div>
                <h4 className={BlogListStyle.recent_post_header}>
                  <a href="#"> Lorem ipsum dolor sit amet consectetur </a>
                </h4>
                <p className={BlogListStyle.recent_post_date}>September 01, 2018</p>
              </div>
            </li>
            <li className={BlogListStyle.recent_post}>
              <img src={Image} className={BlogListStyle.recent_post_img} alt="" srcset="" />
              <div>
                <h4 className={BlogListStyle.recent_post_header}>
                  <a href="#"> Lorem ipsum dolor sit amet consectetur </a>
                </h4>
                <p className={BlogListStyle.recent_post_date}>September 01, 2018</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={`${BlogListStyle.recent_portfolio_container} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>Recent Portfolio</h2>
          <div className={BlogListStyle.portfolio_photos}>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
            <div className={BlogListStyle.portfolio_photo}>
              <a href="#">
                <img src={Image} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>

        <div className={`${BlogListStyle.tag_cloud_container} ${BlogListStyle.mb}`}>
          <h2 className={BlogListStyle.headertag}>Tags</h2>
          <div className={BlogListStyle.tag_clouds}>
            <a href="#" className={BlogListStyle.tag_cloud}>Cable</a>
            <a href="#" className={BlogListStyle.tag_cloud}>IpTv</a>
            <a href="#" className={BlogListStyle.tag_cloud}>Internet</a>
            <a href="#" className={BlogListStyle.tag_cloud}>Provider Service</a>
            <a href="#" className={BlogListStyle.tag_cloud}>Router Setup</a>
          </div>
        </div>
      </div>
  );
};

function blogList() {
  return (
    <div className={BlogListStyle.bloglist_container}>
      <BlogContainer />
      <BlogHelperContainer />
    </div>
  );
}

export default blogList;
