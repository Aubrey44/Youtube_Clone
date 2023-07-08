import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./SearchPage.css";
import VidCards from "./components/VidCards/VidCards";
import { KEY } from "../../localKey";

import axios from "axios";

const SearchPage = () => {

  const [vids, setVids] = useState({});

  //useEffect here - Axio Request for initial YT search

//   useEffect(() => {
//     fetchInitialSearch();
//   }, []);

//     async function fetchInitialSearch() {
//   const response = await axios.get(
//     "https://www.googleapis.com/youtube/v3/search?q=andor&key={KEY}&fields=items(id,snippet(title,description,thumbnails/default))&part=snippet"
//   );
//   console.log(response.data);
//   setVids(response.data);}

  return (
    <div className="container">
      <section className="home-video-grid"></section>
      <VidCards vids={vids}/>
    </div>
  );
  }
export default SearchPage;
