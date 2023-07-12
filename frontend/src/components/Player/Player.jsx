import React from "react";

const Player = () => {
  return (
    <div className="container">
      <div className="video-player">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
        <p className="video-title">{playerDetails[0].snippet.title}</p>
        <p className="video-description">
          {playerDetails[0].snippet.description}
        </p>
        <div className="comments">Comments</div>
      </div>
    </div>
  );
};

export default Player;
