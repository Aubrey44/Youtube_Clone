import React from "react";
import "./VidCards.css"

const VidCards = ({ vids }) => {
  return (
    // Need to check pathing to pull correct info from items
    <div className="video-cards">
      <a>
        <p>Image</p>
        <p>Title</p>
      </a>
    </div>
  );
};

export default VidCards;