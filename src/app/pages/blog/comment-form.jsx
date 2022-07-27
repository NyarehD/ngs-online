import React,{ useState } from "react";
import CommentStyle from "./comment.module.sass"
import BlogStyle from "./blog-single.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUserLarge, faEnvelope, faPenToSquare} from "@fortawesome/free-solid-svg-icons"



const CommentForm=({
    submitLabel, 
    handleSubmit,
    hasCancelBtn=false,
    initialText= "",
    handleCancel,
    themeStyle
})=>{

    const [text, setText]=useState(initialText)
    const [nameText, setNameText]=useState("")
    const [emailText, setEmailText]=useState("")
    const isInputsDisable=nameText.length === 0 || emailText.length === 0 || text.length===0

    const onSubmit=(event)=>{
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return(
        <form onSubmit={onSubmit} className={CommentStyle.sommentSubmitForm}>
            <div className={CommentStyle.comment_Form}>
                <div className={CommentStyle.response_name}>
                    {/* <label htmlFor="author" className={CommentStyle.response_name_label}>Name</label> //hidden lavel */}
                    <FontAwesomeIcon
                        icon={faUserLarge}
                        className={CommentStyle.response_name_icon}
                        htmlFor="author"
                    >
                    </FontAwesomeIcon>
                    <input 
                        type="text" 
                        id="author"
                        name="authorName"
                        value={nameText}
                        size={30}
                        maxLength="245"
                        required="required"
                        placeholder="Full Name"
                        className={CommentStyle.response_name_input}
                        onChange={(e)=>setNameText(e.target.value)}
                        
                    />
                </div>
                <div className={CommentStyle.response_email}>
                    {/* <label htmlFor="email" className={CommentStyle.response_email_label}>Email</label> //hidden lavel */}
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={CommentStyle.response_email_icon}
                    >
                    </FontAwesomeIcon>
                    <input 
                        type="email" 
                        id="email"
                        name="authorEmail"
                        value={emailText}
                        size="30"
                        maxLength="100"
                        aria-required="true"
                        required="required"
                        placeholder="E-mail"
                        className={CommentStyle.response_email_input}
                        onChange={(e)=>setEmailText(e.target.value)}                                           
                    />
                </div>
            </div>
            <div className={CommentStyle.response_comment}>
                    {/* <label htmlFor="email" className={CommentStyle.response_email_label}>Email</label> //hidden lavel */}
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        className={CommentStyle.response_comment_icon}
                    >
                    </FontAwesomeIcon>
                <textarea 
                    className={CommentStyle.commentFormTextarea}
                    value={text}
                    placeholder="Your Commment"
                    onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <button className={CommentStyle.commentFormButton} disabled={isInputsDisable}> 
                <span className={CommentStyle.form_submit_text}>{submitLabel}</span>
            </button>
            {hasCancelBtn && <button 
            type="button" 
            className={CommentStyle.commentFormButton}
            onClick={handleCancel}
            ><span className={CommentStyle.form_submit_text}>Cancel</span></button>}
        </form>
    )
   
}
export default CommentForm