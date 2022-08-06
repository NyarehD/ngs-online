import React,{useState, useEffect} from "react";
import api from "../../../api/blog-single"
import SingleComment from "./single-comment";
import CommentForm from "./comment-form";
import CommentStyle from "./comment.module.sass"

import comment03 from "../../../assets/blog/comment-03.jpg"

const Comments=({currentUserId,setNOComment,themeStyle})=>{
    const [backendComments, setBackendComments]= useState([])
    const [activeComment, setActiveComment] = useState(null)
    const [nOComment, setnOComment]=useState(0)
    const rootComments=backendComments.filter((backendComment)=>backendComment.parentId===null)
    const darkMode = themeStyle === 'dark'?{'background':CommentStyle.darkBackground,'color':CommentStyle.darkTextColor,'InputBox':CommentStyle.darkInputBox}:{}
    const getReplies=(commentId)=>{
        return backendComments.filter(backendComment=>backendComment.parentId===commentId)
        .sort(
            (a,b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
    }
    useEffect(() =>{
        setNOComment(nOComment)
    },[])
    const createComment = async (text, parentId = null) => {
        const updateComments={
            id: Math.random().toString(36).substr(2,9),
            name: text.name,
            email: text.email,
            body: text.text,
            parentId,
            userId: "1",
            username: "Jack",
            authorImg:comment03,    
            createdAt: new Date().toISOString(),
        }
        setnOComment(prevCom=>prevCom+1)
        const response=await api.get("/blog-single")
        const updatecomments=[updateComments,...backendComments]
            const useData={
                ...response.data,
                NOComment : nOComment+1,
                comments: updatecomments
            }
        await api.post(`/blog-single`, useData)
        return updateComments
      };


    const updateComment = async (text, commentId) =>{
        const response=await api.get("/blog-single")
        const updateComments=backendComments.map((backendComment)=>{
            if(backendComment.id === commentId){
                return { ...backendComment, body: text.text}
            }else{ return backendComment }
        })
        const useData={...response.data,comments: updateComments}
        await api.post(`/blog-single`, useData)
        setBackendComments(updateComments)
        setActiveComment(null)
    }

    const addComment=async(text, parentId)=>{
        createComment(text,parentId).then(Comment=>{
            setBackendComments([Comment,...backendComments])
            setActiveComment(null)
        })

    }

    const deleteComment=async(commentId)=>{
        if(window.confirm('Are you sure that you want to delete comment')){
            const updateBackendComments= backendComments.filter(
                backendComment=>backendComment.id !== commentId
                ).filter(backendComment=>backendComment.parentId !== commentId)
            setnOComment(prevCom=>prevCom-1)
            const response=await api.get("/blog-single")
            const useData={...response.data, NOComment : nOComment-1, comments : updateBackendComments}
            await api.post(`/blog-single`, useData)
            setBackendComments(updateBackendComments)
            setActiveComment(null)
        }
    }

        //Retrieve data from api
        useEffect(()=>{
            const retrieveBlog= async()=>{
                try{
                    const response=await api.get("/blog-single")
                    if(response && response.data){
                        setBackendComments(response.data.comments)
                        setnOComment(response.data.NOComment)
                    }else{
                        console.log("Response widthout data")
                    }
                }catch(err){
                    console.log("Error : " +err.message)
                }
            }
            retrieveBlog()
        },[])
    return(
        <div className={CommentStyle.comments}>
            <div className={CommentStyle.commentContainer}>
                {
                    rootComments.map(rootComment=>(
                        <SingleComment 
                            key={rootComment.id} 
                            comment={rootComment}
                            replies={getReplies(rootComment.id)}
                            currentUserId={currentUserId}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            addComment={addComment}
                            themeStyle={themeStyle}
                        />
                        ))
                    }
            </div>
            <div className={`${CommentStyle.commentsTitle} ${darkMode?.color}`}>Leave Your Comment</div>
            <CommentForm submitLabel="submit" handleSubmit={addComment} themeStyle={themeStyle}/>
        </div>
    )

}
export default Comments