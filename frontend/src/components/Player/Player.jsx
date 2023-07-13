import React from "react";
import VidsSidebar from "../VidsSidebar/VidsSidebar";

const Player = ({ id, playerDetails }) => {
  return (
    <div className="container">
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
        <div className="comments">Comments</div>
      </div>
      <VidsSidebar
        relatedVids={relatedVids}
        getVidDetails={getVidDetails}
        setRelatedVids={setRelatedVids}
      />
    </div>
  );
};

export default Player;
