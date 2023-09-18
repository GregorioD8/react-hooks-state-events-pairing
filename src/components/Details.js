import React, { useState } from "react"


function Details({ title, views, createdAt, likes, dislikes }) {

const [upvotes, setUpvotes] = useState(likes)
const [downvotes, setDownvotes] = useState(dislikes)
const [isLiked, setIsLiked] = useState(false)
const [isDisliked, setIsDisliked] = useState(false)

const handleLike =  () => {
    if (isLiked === false) { 
        setUpvotes(upvotes + 1) 
        setIsLiked(true)
        if(isDisliked){
            setDownvotes(downvotes - 1)
            setIsDisliked(false)
        }
        
      
    }
}

const handleDislike =  () => {
    if (isDisliked === false) { 
        setDownvotes(downvotes + 1) 
        setIsDisliked(true)
        if(isLiked){
            setUpvotes(upvotes - 1)
            setIsLiked(false)
        }

    }
}



    return (
        <div>
            <h1>{title}</h1>
            <h3>{views} Views | Uploaded {createdAt}</h3>
            <span>
                <button onClick={handleLike}>👍 {upvotes}</button>
                <button onClick={handleDislike}>👎 {downvotes}</button>
            </span>
        </div>
    )
    }    
export default Details