import React from "react";

const VidCards = ({ vids }) => {
  return (
    // Need to check pathing to pull correct info from items
    <div className="video-cards">
      <a>
        {/* Do not think this is correct pathing */}
        <img>{data.items.snippet.thumbnails.default}</img>
        <p>{data.items.snippet.title}</p>
      </a>
    </div>
  );
};

export default VidCards;
