import React from 'react'


function UserFeed({commentData}){
    return(
        <div className="list-group">
            {
                commentData.map((comment, index) =>
                    (
                        <a href="#" className="list-group-item text-truncate"><strong>{comment.userId}</strong> commented about blabla: "{comment.comment}"</a>
                    )
                )
            }
        </div>
    )
}

export default UserFeed;