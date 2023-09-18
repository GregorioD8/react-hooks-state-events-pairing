import React from "react"
import Comment from "./Comment"

function CommentList({ numberOfComments, comments }){

    const commentList = comments.map((comment) => (
        <Comment
        key={comment.id}
        name={comment.user}
        comment={comment.comment}
        />
    ))
    return (
        <div>
            <h2>{numberOfComments} Comments</h2>
            <div>
                {commentList}
            </div>
        </div>
    )
}
export default CommentList