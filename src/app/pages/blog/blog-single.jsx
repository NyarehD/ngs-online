import React,{useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

import {faCalendarDays, faUserLarge, faEye, faComments, faHeart, faBasketball, faReply, faEnvelope, faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import api from "../../../api/blog-single"
import BlogStyle from "./blog-single.module.sass"
import quote from "../../../assets/blog/quote-icon.png"
import relateImg01 from "../../../assets/blog/related-post01.jpg"
import relateImg02 from "../../../assets/blog/related-post02.jpg"
import comment01 from "../../../assets/blog/comment-01.jpg"
import comment02 from "../../../assets/blog/comment-02.jpg"
import comment03 from "../../../assets/blog/comment-03.jpg"

export default function Blog(){

    const data =[
        {
            userId: '02b',
            comId: '017',
            fullName: 'Chloe Denverou',
            userProfile: '#',
            avatarUrl: 'https://ui-avatars.com/api/name=Chloe%20Denverou',
            text: 'I think you have a point🤔',
            replies: [
                {
                  userId: '02a',
                  comId: '013',
                  userProfile: '#',
                  fullName: 'Dean Whales',
                  avatarUrl: 'https://ui-avatars.com/api/name=Dean%20Whales',
                  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
                }
              ]
          },
          {
            userId: '03b',
            comId: '018',
            fullName: 'Amelia Brynne',
            userProfile: '#',
            avatarUrl: 'https://ui-avatars.com/api/name=Amelia%20Brynne',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
            replies: []
        }
      ]

    const [blog, setBlog]=useState()
    const [like, setLike]=useState(false)
    const [likeCount, setLikeCount]=useState(0)
    const [nOComment, setNOComment]=useState(0)
    const [comments, setComments]=useState({authorName:"",authorEmail:"",commentText:""})
    const [isBoxInput, setIsBoxInput]=useState(true)
    const [userId, setuserId]=useState(true)


    //Retrieve data from api
    useEffect(()=>{
        const retrieveBlog= async()=>{
            try{
                const response=await api.get("/blog-single")
                if(response && response.data){
                    setBlog(response.data)
                    setLikeCount(response.data.like)
                    setNOComment(response.data.NOComment)
                    // console.log(likeCount)
                }else{
                    console.log("Response widthout data")
                }
            }catch(err){
                console.log("Error : " +err.message)
            }
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


    const changeCommentsHandler=(event)=>{
        
        const {name, value}=event.target
        setComments(prevMent=>{
            return{
                ...prevMent,
                [name]:value
            }
        })
        if(comments.commentText.length-1===0){
            setIsBoxInput(true)
        }else{
            setIsBoxInput(false)
        }
            
    }


    const addCommentsHandler=async(e)=>{
        setNOComment(prevCom=>prevCom+1)
        // e.preventDefault()
        console.log(nOComment)
        const response=await api.get("/blog-single")
        const useData={
            ...response.data,
            NOComment: nOComment+1,
            comments:comments
                
        }

        await api.post(`/blog-single/`, useData)
    }
    
    const onSubmitAction = (data) => {
        console.log('this comment was posted!',data)
    }

    if(blog){
        console.log("I GOT DATA (^=^)")
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
                                        <span className={BlogStyle.react_title}>{blog.views} views</span>
                                    </a>
                                </div>
                                <div className={BlogStyle.comment_counts}>
                                    <a href="#" className={BlogStyle.react_links}>
                                        <FontAwesomeIcon
                                            icon={faComments}
                                            className={BlogStyle.react_icon}
                                            >

                                        </FontAwesomeIcon>
                                        <span className={BlogStyle.react_title}>{blog.NOComment} comments</span>
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
                                            return <li className={BlogStyle.blog_list_items}>{list}</li>
                                        })
                                    }
                                </ul>
                                <div className={BlogStyle.post_gallery}>
                                    {
                                        blog.postImage.map(images=>{
                                            return(
                                                <img 
                                                    src={images} 
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
                                                    return <a className={BlogStyle.tags_item} href="#">{tag}</a>
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
                            {/* <ol className={BlogStyle.comment_list}>
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
                            <h2 className={BlogStyle.comment_title}>Leave Your Comment</h2> */}
                            <div id="respond" className={BlogStyle.comment_response}>
                                {/* <form 
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
                                </form> */}
                                  <CommentSection
                                    currentUser={userId ? {
                                        currentUserId: '01a',
                                        currentUserImg:'https://ui-avatars.com/api/name=John%20Hellion',
                                        currentUserProfile:'#',
                                        currentUserFullName: 'John Hellion'
                                    }:null}
                                    // advancedInput={true}
                                    // commentsCount={8}
                                    hrStyle={{ border: '0.5px solid #4c4c4c' }}
                                    titleStyle={{ 
                                        color: '#4c4c4c',
                                        fontSize: '1.7vw',
                                        fontweight: '500',
                                        marginBottom:'20px',
                                        fontFamily: 'poppins, sans-serif'
                                        
                                    }}
                                    customImg={comment01}
                                    inputStyle={{ 
                                        border:'none',
                                        borderRadius: '5px', 
                                        outLine:"none",
                                        backgroundColor:'#fff',
                                        margin:'0 10px',
                                        padding: '20px',
                                        fontFamily: 'poppins, sans-serif'
                                        // boxShadow:'0 0 5px 1px rgba(0,0,0,0.05)' 
                                    }}
                                    formStyle={{ backgroundColor: 'transparent' }}
                                    submitBtnStyle={{
                                        border: '0',
                                        backgroundImage: 'linear-gradient(to right, #5b83cd 0%, #c280bf 100%)',
                                        padding: '2px',
                                        borderRadius: '5px',
                                        height:'50px',
                                        width:'100px',
                                        color:'#eee',
                                        fontSize:'1vw',
                                        fontWeight:'500',
                                        fontFamily: 'poppins, sans-serif',
                                        letterSpacing:'0',
                                        textTransform:'uppercase',
                                        boxShadow:'0 0 3px 0px #c280bf, 0 0 5px 0px #5b83cd',
                                        transition:'0.2s'
                                    }}
                                    cancelBtnStyle={{
                                        border: '2px solid linear-gradient(to right, #5b83cd 0%, #c280bf 100%)',
                                        padding: '2px',
                                        borderRadius: '5px',
                                        height:'50px',
                                        width:'100px',
                                        color: '#4c4c4c',
                                        fontSize:'1vw',
                                        fontWeight:'500',
                                        fontFamily: 'poppins, sans-serif',
                                        letterSpacing:'0',
                                        textTransform:'uppercase',
                                        boxShadow:'0 0 1px 0px #c280bf, 0 0 1px 0px #5b83cd',
                                        transition:'0.2s'
                                    }}
                                    replyInputStyle={{ 
                                        border:'none',
                                        borderRadius: '5px', 
                                        outLine:"none",
                                        backgroundColor:'#fff',
                                        margin:'0 10px',
                                        padding: '20px',
                                        fontFamily: 'poppins, sans-serif'
                                    }}
                                    // overlayStyle={{ backgroundColor: '#0f0d29', color: 'white' }}
                                    logIn={{
                                        loginLink: 'http://localhost:3000/',
                                        signupLink: 'http://localhost:3000/'
                                    }}
                                    commentData={data}
                                    customNoComment={() => "Be the first to Comment!"}
                                    onDeleteAction={() => alert('Are you sure?')}
                                    onReplyAction={() => alert('Reply was posted')}
                                    onEditAction={() => alert('Reply was edited!')}
                                    onSubmitAction={()=>onSubmitAction(data)}

                                />
                            </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}