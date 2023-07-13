import React from "react";
import VideoDetails from "../VideoDetails/VideoDetails";

const Player = ({ id, playerDetails }) => {
  return (
    <div className="video-player">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      {/* <VideoDetails playerDetails={playerDetails}/> */}
      <div className="comments">Comments</div>
    </div>
  );
};

export default Player;
