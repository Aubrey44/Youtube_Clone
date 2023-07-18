import React from "react";

import "./CommentDisplay.css";

const CommentDisplay = ({ comments }) => {

  return (
    <>
      <div className="comment-display">
        {comments ? comments && comments.map((item) => (
            <div key={item.id} className="comment-block">
              <p className="comment-username">{item.user.username}</p>
              <p className="comment-text">{item.text}</p>
            </div>)) : <p>There are no comments for this video</p>}
      </div>
    </>
  );
};

export default CommentDisplay;
