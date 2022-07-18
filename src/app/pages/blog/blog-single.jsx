import React,{useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Comments from "./comments";

import {faCalendarDays, faUserLarge, faEye, faComments, faHeart, faBasketball} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import api from "../../../api/blog-single"
import BlogStyle from "./blog-single.module.sass"
import quote from "../../../assets/blog/quote-icon.png"
import relateImg01 from "../../../assets/blog/related-post01.jpg"
import relateImg02 from "../../../assets/blog/related-post02.jpg"

export default function Blog(){

    const [blog, setBlog]=useState()
    const [like, setLike]=useState(false)
    const [likeCount, setLikeCount]=useState(0)
    const [viewCount, setViewCount]=useState(0)
    const [nOComment, setNOComment]=useState(0)


    //Retrieve data from api
    useEffect(()=>{
        const retrieveBlog= async()=>{
            try{
                const response=await api.get("/blog-single")
                if(response && response.data){
                    setBlog(response.data)
                    setLikeCount(response.data.like)
                    setViewCount(response.data.views)
                }else{console.log("Response widthout data")}
            }catch(err){console.log("Error : " +err.message)}
        }
        retrieveBlog()
    },[])

    const reactLikeHandler=async()=>{
        like? setLikeCount(prevLike=>prevLike-1) : setLikeCount(prevLike=>prevLike+1)
        const response=await api.get("/blog-single")
        const useData={
            ...response.data,
            like: like? likeCount-1 : likeCount+1
        }
        await api.put(`/blog-single/`, useData)
        setLike(prev=> !prev)
    }

    if(blog){
        // console.log("I GOT DATA (^=^)")
        return(
            <section>
            
                <div className={BlogStyle.container}>
                    <div className={BlogStyle.content}>
                        <div className={BlogStyle.main_photo}>
                            <img 
                                src={blog.mainImage} 
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
                                        <span className={BlogStyle.react_title}>{blog.date}, {blog.month}, {blog.year}</span>
                                    </a>
                                </div>
                                <div className={BlogStyle.author}>
                                    <a href="#" className={BlogStyle.react_links}>
                                        <FontAwesomeIcon
                                            icon={faUserLarge}
                                            className={BlogStyle.react_icon}
                                            >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.react_title}>{blog.authorRole}</span>
                                    </a>
                                </div>
                                <div className={BlogStyle.view_count}>
                                    <a href="#" className={BlogStyle.react_links}>
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            className={BlogStyle.react_icon}
                                            >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.react_title}>{viewCount} views</span>
                                    </a>
                                </div>
                                <div className={BlogStyle.comment_counts}>
                                    <a href="#" className={BlogStyle.react_links}>
                                        <FontAwesomeIcon
                                            icon={faComments}
                                            className={BlogStyle.react_icon}
                                            >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.react_title}>{nOComment} comments</span>
                                    </a>
                                </div>
                                <div className={BlogStyle.like_counts}>
                                    <a href="#" className={BlogStyle.react_links}>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={BlogStyle.react_icon}
                                            >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.react_title}>
                                        {likeCount} likes</span>
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            <div className={BlogStyle.main_blog}>
                                <h2 className={BlogStyle.blog_title}>
                                    {blog.title}
                                </h2>
                                <p className={BlogStyle.blog_body_text}>
                                    {blog.para01}
                                </p>
                                <p className={BlogStyle.blog_body_text}>
                                    {blog.para02}
                                </p>
                                <ul className={BlogStyle.blog_list}>
                                    {
                                        blog.lists.map(list=>{
                                            return <li key={list.id} className={BlogStyle.blog_list_items}>{list.content}</li>
                                        })
                                    }
                                </ul>
                                <div className={BlogStyle.post_gallery}>
                                    {
                                        blog.postImage.map(images=>{
                                            return(
                                                <img 
                                                    src={images.img} 
                                                    key={images.id}
                                                    alt=""
                                                    className={BlogStyle.post_gallery_image} 
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <p className={BlogStyle.blog_body_text}>
                                    {blog.para03}
                                </p>
                                <blockquote className={BlogStyle.block_quote}>
                                    <div className={BlogStyle.media}>
                                        <div className={BlogStyle.quote}>
                                            <div className={BlogStyle.quote_content}>
                                                <img className={BlogStyle.quote_content_img} src={quote} alt="" />
                                            </div>
                                        </div>
                                        <div className={BlogStyle.media_body}>
                                            <p className={BlogStyle.quote_title}>{blog.quoteTitle}</p>
                                            <h6 className={BlogStyle.quote_text}>
                                               {blog.quote}
                                            </h6>
                                        </div>
                                    </div>
                                </blockquote>
                                <p className={BlogStyle.blog_body_text}>
                                    {blog.para04}
                                </p>
                                <p className={BlogStyle.blog_body_text}>
                                    {blog.para05}
                                </p>
                                <div className={BlogStyle.blog_reaction}>
                                    <div className={BlogStyle.blog_tags}>
                                        <span className={BlogStyle.tags_span}>Tags:</span>
                                        <div className={BlogStyle.tag_items}>
                                            {
                                                blog.tag.map(tag=>{
                                                    return <a key={tag.id} className={BlogStyle.tags_item} href="#">{tag.tagIext}</a>
                                                    
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className={BlogStyle.blog_react}>
                                        
                                        {like?
                                                <span 
                                                    href="" 
                                                    className={BlogStyle.blog_react_like}
                                                    onClick={()=>{reactLikeHandler()}}
                                                    style={{color:'#5b83cd'}}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                        className={BlogStyle.blog_react_icon}
                                                    >
        
                                                    </FontAwesomeIcon>
                                                    <span className={BlogStyle.blog_react_text}>unlike this post</span>
                                                </span>
                                                :
                                                <span 
                                                    href="#" 
                                                    className={BlogStyle.blog_react_like}
                                                    onClick={()=>{reactLikeHandler()}}

                                                >
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                        className={BlogStyle.blog_react_icon}
                                                    >
    
                                                    </FontAwesomeIcon>
                                                    <span className={BlogStyle.blog_react_text}>like this post</span>
                                            </span>
                                            }
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
                                <img src={blog.authorImg} alt="" className={BlogStyle.author_profile_img} />
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

                                <Comments currentUserId="1" setNOComment={setNOComment}/>

                                {/* 
                                <h2 className={BlogStyle.comment_title}>Leave Your Comment</h2>
                                <div id="respond" className={BlogStyle.comment_response}>
                                    <form 
                                        action="#"
                                        id="comment_form"
                                        className={BlogStyle.comment_form}
                                    >
                                        <div className={BlogStyle.response_name}>
                                            <label htmlFor="author" className={BlogStyle.response_name_label}>Name</label> //hidden lavel
                                            <FontAwesomeIcon
                                                icon={faUserLarge}
                                                className={BlogStyle.response_name_icon}
                                                htmlFor="author"
                                            >
                                            </FontAwesomeIcon>
                                            <input 
                                                type="text" 
                                                id="author"
                                                name="authorName"
                                                size={30}
                                                maxLength="245"
                                                required="required"
                                                placeholder="Full Name"
                                                className={BlogStyle.response_name_input}
                                                onChange={changeCommentsHandler}
                                            />
                                        </div>
                                        <div className={BlogStyle.response_email}>
                                            <label htmlFor="email" className={BlogStyle.response_email_label}>Email</label> //hidden lavel
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                className={BlogStyle.response_email_icon}
                                            >
                                            </FontAwesomeIcon>
                                            <input 
                                                type="email" 
                                                id="email"
                                                name="authorEmail"
                                                size="30"
                                                maxLength="100"
                                                aria-required="true"
                                                required="required"
                                                placeholder="E-mail"
                                                className={BlogStyle.response_email_input}
                                                onChange={changeCommentsHandler}
                                            />
                                        </div>
                                        <div className={BlogStyle.response_comment}>
                                            <label htmlFor="comment" className={BlogStyle.response_comment_label}>Comment</label> //hidden lavel
                                            <FontAwesomeIcon
                                                icon={faPenToSquare}
                                                className={BlogStyle.response_comment_icon}
                                            >
                                            </FontAwesomeIcon>
                                            <textarea 
                                                id="comment"
                                                name="commentText"
                                                cols="45"
                                                rows="8"
                                                maxLength="65525"
                                                aria-required="true"
                                                required="required"
                                                placeholder="Your Comment"
                                                className={BlogStyle.response_comment_input}
                                                onChange={changeCommentsHandler}
                                            >
                                            </textarea>
                                        </div>
                                        <div className={BlogStyle.form_submit}>
                                            <button 
                                                type="submit" 
                                                className={BlogStyle.form_submit_btn}
                                                disabled={isBoxInput? true: ""}
                                                onClick={addCommentsHandler}
                                            >
                                                <span className={BlogStyle.form_submit_text}>Submit</span>
                                            </button>
                                        </div>
                                    </form>
                                </div> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}