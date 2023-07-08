import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./SearchPage.css";

import axios from "axios";

const SearchPage = () => {
  //State variables here
  const [vids, setVids] = useState({});

  //useEffect here - Axio Request for initial YT search

//   useEffect(() => {
//     fetchInitialSearch();
//   }, []);

//     async function fetchInitialSearch() {
//   const response = await axios.get(
//     "https://www.googleapis.com/youtube/v3/search?q=andor&key=AIzaSyBnUp1hw6qkWq03RbbmCKEHVU6fTc7BmVw&fields=items(id,snippet(title,description,thumbnails/default))&part=snippet"
//   );
//   console.log(response.data);
//   setVids(response.data);}

  return (
    <div className="container">
      <section className="home-video-grid"></section>
      <div className="video-cards"></div>
    </div>
  );
  }
export default SearchPage;
