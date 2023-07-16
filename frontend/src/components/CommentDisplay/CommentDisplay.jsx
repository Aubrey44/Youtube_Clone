import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./CommentDisplay.css";

const CommentDisplay = ({ id }) => {

  const [comments, setComments] = useState([]);
  
  async function getAllComments() {
    const response = await axios.get(`http://127.0.0.1:8000/api/comments/${id}`);
    console.log(response.data);
    setComments(response.data);
  }


  useEffect(() => {
    getAllComments();
  }, [id]);
  
  return (

    <div className='comment-display'>Comment Display</div>

  )
}

export default CommentDisplay