import React from "react";
import CommentPost from "../CommentPost/CommentPost";
import CommentDisplay from "../CommentDisplay/CommentDisplay";

const Player = ({ id, playerDetails }) => {

    console.log (playerDetails)

  return (
    <div className="video-player">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      <p className="video-title">{playerDetails.snippet?.title}</p>
        <p className="video-description">
          {playerDetails.snippet?.description}
        </p>
      <CommentPost />
      <CommentDisplay />

    </div>
  );
};

export default Player;
