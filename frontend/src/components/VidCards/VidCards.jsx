import React from "react";
import "./VidCards.css";

const VidCards = ({ id, title, img }) => {
  console.log("props check");
  console.log(id);
  console.log(title);
  console.log(img);

  return (
    // Need to check pathing to pull correct info from items
    //TODO: Adjust video links - keep inside project

    <div key={id} className="video-cards">
      <a>
        <img src={`${img}`}></img>
      </a>
      <p className="card-text">{title}</p>
    </div>
  );
};

export default VidCards;
