import React from "react";
import "./VidCards.css";
import { Link } from "react-router-dom";

const VidCards = ({ id, title, img, handleClick }) => {
  // console.log("props check");
  // console.log(id);
  // console.log(title);
  // console.log(img);

  return (
    // Need to check pathing to pull correct info from items
    //TODO: Adjust video links - keep inside project

    <div key={id} className="video-cards">
      <Link to={`/player/${id}`}>
        <img src={`${img}`}></img>
      </Link>
      <p className="card-text">{title}</p>
    </div>
  );
};

export default VidCards;

// Links to youtube player, need it to go to project video page
//* <a href={`https://www.youtube.com/embed/${id}`}> */
// <Link to={`/player/${id}`} ></Link>
