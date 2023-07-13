import React from "react";

const VideoDetails = ({ playerDetails }) => {
  return (
    <div>
      PlayerDetails
      <p className="video-title">{playerDetails[0].snippet.title}</p>
      <p className="video-description">
        {playerDetails[0].snippet.description}
      </p>
    </div>
  );
};

export default VideoDetails;
