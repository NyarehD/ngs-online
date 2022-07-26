import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faReply, faTrashCan, faPenToSquare} from "@fortawesome/free-solid-svg-icons"

import CommentForm from "./comment-form";
import CommentStyle from "./comment.module.sass"

const SingleComment=({
    comment, 
    replies,
    currentUserId, 
    deleteComment,
    updateComment,
    activeComment,
    addComment,
    setActiveComment,
    parentId=null
})=>{
    // const fiveMinutes= 300000
    // const timePassed = new Date()-new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.userId
    const canDelete = currentUserId === comment.userId
    const createdAt = new Date(comment.createdAt).toLocaleDateString()
    const isReplying =
        activeComment && 
        activeComment.type === "replying" &&
        activeComment.id === comment.id
    const isEditing =
        activeComment && 
        activeComment.type === "editing" &&
        activeComment.id === comment.id
    const replyId = parentId? parentId : comment.id
    return(
        <div className={CommentStyle.comment}>
            <div className={CommentStyle.commentImageContainer}>
                <img className={CommentStyle.commentImageContainerImg} src={comment.authorImg} alt="" />
            </div>
            <div className={CommentStyle.commentRightPart}>
                <div className={CommentStyle.commentContent}>
                    <a href="" className={CommentStyle.commentAuthor}>
                        {comment.username}
                    </a>  
                    <a href="#" className={CommentStyle.commentMetaLink}>
                        <div className={CommentStyle.commentDate}>{createdAt}</div>
                    </a>
                </div>
                {!isEditing && <div className={CommentStyle.commentText}>{comment.body}</div>}
                {isEditing && (
                    <CommentForm 
                        submitLabel="Update" 
                        hasCancelBtn ="true"
                        initialText={comment.body}
                        handleSubmit={(text)=>updateComment(text, comment.id)}
                        handleCancel={()=>setActiveComment(null)}

                    />
                )}
                <div className={CommentStyle.commentActions}>
                    {canReply && 
                        <div 
                            className={CommentStyle.commentAction}
                            onClick={()=>setActiveComment({id:comment.id, type: 'replying'})}
                        >
                            <FontAwesomeIcon
                                icon={faReply}
                            />
                        </div>}

                    {canEdit && 
                        <div 
                            className={CommentStyle.commentAction}
                            onClick={()=>setActiveComment({id:comment.id, type: 'editing'})}
                        >
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                            />
                        </div>}

                    {canDelete && 

                        <div 
                            className={CommentStyle.commentAction} 
                            onClick={()=> deleteComment(comment.id)}
                        >
                            <FontAwesomeIcon
                                icon={faTrashCan}
                            />
                        </div>}
                </div>
                { isReplying &&
                    <CommentForm submitLabel="Reply" handleSubmit={(text)=> addComment(text, replyId)}/>
                }
                {replies.length>0 && (
                    <div className="replies">
                        {replies.map(reply=>(
                            <SingleComment 
                                comment={reply} 
                                key={reply.id} 
                                replies={[]} 
                                currentUserId={currentUserId} 
                                deleteComment={deleteComment}
                                updateComment={updateComment}
                                addComment={addComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                parentId={comment.id}
                                
                            />

                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default SingleComment