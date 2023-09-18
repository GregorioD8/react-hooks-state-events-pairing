import React from "react"


function Comment({ name, comment }) {


       return (
        <div class="card">
            <div class="content">
           
                <h4> 👤 {name}</h4>
                <p>{comment}</p>
            </div>
        </div>

    )
}

export default Comment