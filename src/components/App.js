import video from "../data/video.js";
import Details from "./Details"
import React, { useState } from "react"
import CommentList from "./CommentList.js"
function App() {
  console.log("Here's your data:", video);
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
        <div>
          <Details
          title={video.title}
          views={video.views}
          createdAt={video.createdAt}
          likes={video.upvotes}
          dislikes={video.downvotes}
          />
        </div>
        <div>
        <button onClick={toggleVisibility}>
        {visible ? "Hide Comments" : "Show Comments"}
        </button>
        </div>
        <hr>
        </hr>
        <div style= {{display: visible ? "block" : "none"}}>
          <CommentList 
            comments={video.comments} 
            numberOfComments={video.comments.length}/>
        </div>
 
    </div>
    
  
  );
}

export default App;
