import React from "react";
import CommentPost from "../CommentPost/CommentPost";

const Player = ({ id, playerDetails }) => {

    console.log (playerDetails)

  return (
    <div className="video-player">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      {/* <p className="video-title">{playerDetails[0].snippet.title}</p>
        <p className="video-description">
          {playerDetails[0].snippet.description}
        </p> */}
      <CommentPost />
    </div>
  );
};

export default Player;
