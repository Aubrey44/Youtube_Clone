import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./CommentDisplay.css";

const CommentDisplay = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  async function getAllComments() {
    const response = await axios.get(`http://127.0.0.1:8000/api/comment/${id}`);
    console.log(response.data);
    setComments(response.data);
  }

  useEffect(() => {
    getAllComments();
  }, [id]);

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
