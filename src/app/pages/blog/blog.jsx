import React,{useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faUserLarge, faEye, faComments, faHeart, faBasketball, faReply, faEnvelope, faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import api from "../../../api/blog-single"
import BlogStyle from "./blog.module.sass"
import image03 from "../../../assets/blog/03.jpg"
import image04 from "../../../assets/blog/04.jpg"
import image05 from "../../../assets/blog/05.jpg"
import image06 from "../../../assets/blog/06.jpg"
import quote from "../../../assets/blog/quote-icon.png"
import authorBio from "../../../assets/blog/author-bio.jpg"
import relateImg01 from "../../../assets/blog/related-post01.jpg"
import relateImg02 from "../../../assets/blog/related-post02.jpg"
import comment01 from "../../../assets/blog/comment-01.jpg"
import comment02 from "../../../assets/blog/comment-02.jpg"
import comment03 from "../../../assets/blog/comment-03.jpg"

export default function Blog(){
    const [blog, setBlog]=useState()
    //Retrieve data from api
    useEffect(()=>{
        const retrieveBlog= async()=>{
            try{
                const response=await api.get("/blog-single")
                if(response && response.data){
                    setBlog(response.data)
                    console.log(response.data)
                }else{
                    console.log("Response widthout data")
                }
            }catch(err){
                console.log("Error : " +err.message)
            }
        }
        retrieveBlog()
    },[])

    // console.log(blog)
    return(
        <section>
            <div className={BlogStyle.container}>
                <div className={BlogStyle.content}>
                    <div className={BlogStyle.main_photo}>
                        <img 
                            src={image06} 
                            alt=""
                            className={BlogStyle.main_photo_img}
                        />
                    </div>
                    <div className={BlogStyle.post_content}>
                        <div className={BlogStyle.reaction}>
                            <div className={BlogStyle.posted_on}>
                                <a href="#" className={BlogStyle.react_links}>
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}
                                        className={BlogStyle.react_icon}
                                        >

                                    </FontAwesomeIcon>
                                    <span className={BlogStyle.react_title}>16.01.22</span>
                                </a>
                            </div>
                            <div className={BlogStyle.author}>
                                <a href="#" className={BlogStyle.react_links}>
                                    <FontAwesomeIcon
                                        icon={faUserLarge}
                                        className={BlogStyle.react_icon}
                                        >

                                    </FontAwesomeIcon>
                                    <span className={BlogStyle.react_title}>admin</span>
                                </a>
                            </div>
                            <div className={BlogStyle.view_count}>
                                <a href="#" className={BlogStyle.react_links}>
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={BlogStyle.react_icon}
                                        >

                                    </FontAwesomeIcon>
                                    <span className={BlogStyle.react_title}>{270} views</span>
                                </a>
                            </div>
                            <div className={BlogStyle.comment_counts}>
                                <a href="#" className={BlogStyle.react_links}>
                                    <FontAwesomeIcon
                                        icon={faComments}
                                        className={BlogStyle.react_icon}
                                        >

                                    </FontAwesomeIcon>
                                    <span className={BlogStyle.react_title}>{94} comments</span>
                                </a>
                            </div>
                            <div className={BlogStyle.like_counts}>
                                <a href="#" className={BlogStyle.react_links}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={BlogStyle.react_icon}
                                        >

                                    </FontAwesomeIcon>
                                    <span className={BlogStyle.react_title}>{0} likes</span>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <div className={BlogStyle.main_blog}>
                            <h2 className={BlogStyle.blog_title}>
                                Donec laoreet tortor sed mollis leo maximus. Sed semper pelat est esque libero et semper tempurus invidunt.
                            </h2>
                            <p className={BlogStyle.blog_body_text}>
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet 
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                            <p className={BlogStyle.blog_body_text}>
                                Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </p>
                            <ul className={BlogStyle.blog_list}>
                                <li className={BlogStyle.blog_list_items}>Consetetur sadipscing elitr, sed diam nonumy</li>
                                <li className={BlogStyle.blog_list_items}>Eirmod tempor invidunt ut labore</li>
                                <li className={BlogStyle.blog_list_items}>Sed diam voluptua. At vero eos accusam</li>
                            </ul>
                            <div className={BlogStyle.post_gallery}>
                                <img 
                                    src={image03} 
                                    alt=""
                                    className={BlogStyle.post_gallery_image} 
                                />
                                <img 
                                    src={image04} 
                                    alt=""
                                    className={BlogStyle.post_gallery_image} 
                                />
                                <img 
                                    src={image05} 
                                    alt=""
                                    className={BlogStyle.post_gallery_image} 
                                />
                            </div>
                            <p className={BlogStyle.blog_body_text}>
                                Nullam tincidunt porta nulla, id condimentum mi iaculis a. Nulla aliquam aliquet magna, 
                                eu tincidunt est pellentesque sed. Praesent auctor mauris at ipsum posuere varius. 
                                Ut id diam vehicula, sagittis dui non, pulvinar velit. Phasellus in nulla et nisl 
                                congue elementum eget sed nunc. Donec magna augue, egestas vestibulum magna at, posuere 
                                eleifend quam.
                            </p>
                            <blockquote className={BlogStyle.block_quote}>
                                <div className={BlogStyle.media}>
                                    <div className={BlogStyle.quote}>
                                        <div className={BlogStyle.quote_content}>
                                            <img className={BlogStyle.quote_content_img} src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className={BlogStyle.media_body}>
                                        <p className={BlogStyle.quote_title}>Gregory D, Grey, Client</p>
                                        <h6 className={BlogStyle.quote_text}>
                                            We had hughesnet for ages and were completely unhappy with it. 
                                            We switched to MaxiCom and have never looked back. We are much 
                                            much happier!
                                        </h6>
                                    </div>
                                </div>
                            </blockquote>
                            <p className={BlogStyle.blog_body_text}>
                                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                            </p>
                            <p className={BlogStyle.blog_body_text}>
                                Quisque vehicula vestibulum mattis. Orci varius natoque penatibus et magnis dis parturient montes, 
                                nascetur ridiculus mus. Sed blandit dui ut semper tincidunt. Phasellus rutrum neque in metus 
                                lobortis rutrum.
                            </p>
                            <div className={BlogStyle.blog_reaction}>
                                <div className={BlogStyle.blog_tags}>
                                    <span className={BlogStyle.tags_span}>Tags:</span>
                                    <div className={BlogStyle.tag_items}>
                                        <a className={BlogStyle.tags_item} href="#">Internet</a>
                                        <a className={BlogStyle.tags_item} href="#">IPTV</a>
                                        <a className={BlogStyle.tags_item} href="#">CABEL</a>
                                    </div>
                                </div>

                                <div className={BlogStyle.blog_react}>
                                    <a href="#" className={BlogStyle.blog_react_like}>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={BlogStyle.blog_react_icon}
                                        >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.blog_react_text}>like this post</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={BlogStyle.social}>
                        <a href="#" 
                            className={BlogStyle.social_media_links_facebook}
                        >
                            <FontAwesomeIcon
                                icon={faFacebookF}
                            >
                            </FontAwesomeIcon>
                        </a>
                        <a href="#" 
                            className={BlogStyle.social_media_links_twitter}
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                            >
                            </FontAwesomeIcon>
                        </a>
                        <a href="#" 
                            className={BlogStyle.social_media_links_google}
                        >
                            <FontAwesomeIcon
                                icon={faGooglePlusG}
                            >
                            </FontAwesomeIcon>
                        </a>
                        <a href="#" 
                            className={BlogStyle.social_media_links_instagram}
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                            >
                            </FontAwesomeIcon>
                        </a>
                        <a href="#" 
                            className={BlogStyle.social_media_links_youtube}
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                            >
                            </FontAwesomeIcon>
                        </a>
                        <a href="#" 
                            className={BlogStyle.social_media_links_dribble}
                        >
                            <FontAwesomeIcon
                                icon={faBasketball}
                            >
                            </FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div className={BlogStyle.author_bio}>
                    <div className={BlogStyle.author_bio_content}>
                        <div className={BlogStyle.author_profile}>
                            <img src={authorBio} alt="" className={BlogStyle.author_profile_img} />
                        </div>
                        <div className={BlogStyle.author_content}>
                                <h3 className={BlogStyle.author_role}>Admin</h3>
                                <a href="#" className={BlogStyle.author_name}>Johan Browning</a>
                                <p className={BlogStyle.author_bio_text}>
                                    Consetetur sadipscing elitr sed diam nonumy eirmod tempor 
                                    invidunt ut labore dolore magna aliquyam erat sed diam voluptua.
                                </p>
                                <div className={BlogStyle.author_social}>
                                    <a href="#" className={BlogStyle.author_social_facebook}>
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className={BlogStyle.author_social_twitter}>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                        ></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className={BlogStyle.author_social_google}>
                                        <FontAwesomeIcon
                                            icon={faGooglePlusG}
                                        ></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className={BlogStyle.author_social_youtube}>
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                        ></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className={BlogStyle.author_social_linkedin}>
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                        ></FontAwesomeIcon>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={BlogStyle.related_posts}>
                    <h2 className={BlogStyle.title}>Related Posts</h2>
                    <div className={BlogStyle.relatedPost}>
                        <article className={BlogStyle.relatedPost_item}>
                            <a href="#" className={BlogStyle.relatedPost_link}>
                                <img 
                                    src={relateImg01} alt="" 
                                    className={BlogStyle.relatedPost_image}
                                />
                                <p className={BlogStyle.relatedPost_description}>
                                    Lorem Ipsum Dolor Sit Amet Consectetur Adi Piscing Elitures Popinus
                                </p>
                                <span className={BlogStyle.relatedPost_postedOn}>March 11, 2022</span>
                            </a>
                        </article>
                        <article className={BlogStyle.relatedPost_item}>
                            <a href="#" className={BlogStyle.relatedPost_link}>
                                <img 
                                    src={relateImg02} alt="" 
                                    className={BlogStyle.relatedPost_image}
                                />
                                <p className={BlogStyle.relatedPost_description}>
                                    Integer Facilisis Accumsan Ullamcorper Inte Germanius Novus At
                                </p>
                                <span className={BlogStyle.relatedPost_postedOn}>March 15, 2022</span>
                            </a>
                        </article>
                    </div>
                </div>
                <div className={BlogStyle.comment_section}>
                   <div className={BlogStyle.comment_area}>
                        <h2 className={BlogStyle.comment_title}>Comments</h2>
                        <ol className={BlogStyle.comment_list}>
                            <li className={BlogStyle.comment}>
                                <article className={BlogStyle.comment_body}>
                                    <footer className={BlogStyle.comment_meta}>
                                        <div className={BlogStyle.comment_author}>
                                            <img 
                                                src={comment01} 
                                                alt="" 
                                                className={BlogStyle.comment_author_img}
                                            />
                                            <b className={BlogStyle.comment_author_details}>
                                                <a href="#" className={BlogStyle.comment_author_name}>
                                                    Chloe Denverou
                                                </a>
                                                <span className={BlogStyle.comment_metadata}>
                                                    <a href="#" className={BlogStyle.metadata_links}>
                                                        <time className={BlogStyle.metadata_date}>
                                                            March 14, 2022
                                                        </time>
                                                    </a>
                                                </span>
                                            </b>
                                            <div className={BlogStyle.reply}>
                                                <a href="#respond" className={BlogStyle.reply_icon}>
                                                    <FontAwesomeIcon
                                                        icon={faReply}
                                                    >
                                                    </FontAwesomeIcon>
                                                </a>
                                            </div>
                                        </div>
                                    </footer>
                                    <div className={BlogStyle.comment_content}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing
                                            elitr, sed diam nonumy eirmod tempor invidunt ut
                                            labore et dolore magna aliquyam erat, sed diam
                                            voluptua.
                                        </p>
                                    </div>
                                </article>
                                <ol className={BlogStyle.reply_comment}>
                                    <li className={BlogStyle.comment}>
                                        <article className={BlogStyle.comment_body}>
                                            <footer className={BlogStyle.comment_meta}>
                                                <div className={BlogStyle.comment_author}>
                                                    <img 
                                                        src={comment02} 
                                                        alt="" 
                                                        className={BlogStyle.comment_author_img}
                                                    />
                                                    <b className={BlogStyle.comment_author_details}>
                                                        <a href="#" className={BlogStyle.comment_author_name}>
                                                            Chloe Denverou
                                                        </a>
                                                        <span className={BlogStyle.comment_metadata}>
                                                            <a href="#" className={BlogStyle.metadata_links}>
                                                                <time className={BlogStyle.metadata_date}>
                                                                    March 14, 2022
                                                                </time>
                                                            </a>
                                                        </span>
                                                    </b>
                                                    <div className={BlogStyle.reply}>
                                                        <a href="#respond" className={BlogStyle.reply_icon}>
                                                            <FontAwesomeIcon
                                                                icon={faReply}
                                                            >
                                                            </FontAwesomeIcon>
                                                        </a>
                                                    </div>
                                                </div>
                                            </footer>
                                            <div className={BlogStyle.comment_content}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing
                                                    elitr, sed diam nonumy eirmod tempor invidunt ut
                                                    labore et dolore magna aliquyam erat, sed diam
                                                    voluptua.
                                                </p>
                                            </div>
                                        </article>
                                    </li>
                                </ol>
                            </li>
                            <li className={BlogStyle.comment}>
                                <article className={BlogStyle.comment_body}>
                                    <footer className={BlogStyle.comment_meta}>
                                        <div className={BlogStyle.comment_author}>
                                            <img 
                                                src={comment03} 
                                                alt="" 
                                                className={BlogStyle.comment_author_img}
                                            />
                                            <b className={BlogStyle.comment_author_details}>
                                                <a href="#" className={BlogStyle.comment_author_name}>
                                                    Chloe Denverou
                                                </a>
                                                <span className={BlogStyle.comment_metadata}>
                                                    <a href="#" className={BlogStyle.metadata_links}>
                                                        <time className={BlogStyle.metadata_date}>
                                                            March 14, 2022
                                                        </time>
                                                    </a>
                                                </span>
                                            </b>
                                            <div className={BlogStyle.reply}>
                                                <a href="#respond" className={BlogStyle.reply_icon}>
                                                    <FontAwesomeIcon
                                                        icon={faReply}
                                                    >
                                                    </FontAwesomeIcon>
                                                </a>
                                            </div>
                                        </div>
                                    </footer>
                                    <div className={BlogStyle.comment_content}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing
                                            elitr, sed diam nonumy eirmod tempor invidunt ut
                                            labore et dolore magna aliquyam erat, sed diam
                                            voluptua.
                                        </p>
                                    </div>
                                </article>
                            </li>
                        </ol>
                        <h2 className={BlogStyle.comment_title}>Leave Your Comment</h2>
                        <div id="respond" className={BlogStyle.comment_response}>
                            <form 
                                action="/"
                                id="comment_form"
                                method="post"
                                className={BlogStyle.comment_form}
                            >
                                <div className={BlogStyle.response_name}>
                                    {/* <label htmlFor="author" className={BlogStyle.response_name_label}>Name</label> //hidden lavel */}
                                    <FontAwesomeIcon
                                        icon={faUserLarge}
                                        className={BlogStyle.response_name_icon}
                                        htmlFor="author"
                                    >
                                    </FontAwesomeIcon>
                                    <input 
                                        type="text" 
                                        id="author"
                                        name="author"
                                        size={30}
                                        maxLength="245"
                                        required="required"
                                        placeholder="Full Name"
                                        className={BlogStyle.response_name_input}
                                    />
                                </div>
                                <div className={BlogStyle.response_email}>
                                    {/* <label htmlFor="email" className={BlogStyle.response_email_label}>Email</label> //hidden lavel */}
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className={BlogStyle.response_email_icon}
                                    >
                                    </FontAwesomeIcon>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        size="30"
                                        maxLength="100"
                                        aria-required="true"
                                        required="required"
                                        placeholder="E-mail"
                                        className={BlogStyle.response_email_input}
                                    />
                                </div>
                                <div className={BlogStyle.response_comment}>
                                    {/* <label htmlFor="comment" className={BlogStyle.response_comment_label}>Comment</label> //hidden lavel */}
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className={BlogStyle.response_comment_icon}
                                    >
                                    </FontAwesomeIcon>
                                    <textarea 
                                        id="comment"
                                        name="comment"
                                        cols="45"
                                        rows="8"
                                        maxLength="65525"
                                        aria-required="true"
                                        required="required"
                                        placeholder="Your Comment"
                                        className={BlogStyle.response_comment_input}
                                    >
                                    </textarea>
                                </div>
                                <div className={BlogStyle.form_submit}>
                                    <button type="submit" className={BlogStyle.form_submit_btn}>
                                        <span className={BlogStyle.form_submit_text}>Submit</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}