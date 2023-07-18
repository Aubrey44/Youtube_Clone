import React from 'react';
import CommentPost from "../CommentPost/CommentPost";
import CommentDisplay from "../CommentDisplay/CommentDisplay";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";



const Player = ({ id, playerDetails }) => {

  const { user } = useContext(AuthContext);

  return (
    <div className="video-player">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      <p className="video-title">{playerDetails.snippet?.title}</p>
      <p className="video-description">{playerDetails.snippet?.description}</p>
      {user ? (
        <CommentPost id={id}/>
      ) : (
        <p>Must be logged in to comment!</p>
      )}
      
      <CommentDisplay id={id}/>
    </div>
  );
};

export default Player;
