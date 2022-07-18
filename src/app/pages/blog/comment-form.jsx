import React,{ useState } from "react";
import CommentStyle from "./comment.module.sass"

const CommentForm=({
    submitLabel, 
    handleSubmit,
    hasCancelBtn=false,
    initialText= "",
    handleCancel
})=>{

    const [text, setText]=useState(initialText)
    const isTextareaIsDisabled=text.length===0
    const onSubmit=(event)=>{
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return(
        <form onSubmit={onSubmit}>
            <textarea 
                className={CommentStyle.commentFormTextarea}
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button className={CommentStyle.commentFormButton} disabled={isTextareaIsDisabled}> 
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