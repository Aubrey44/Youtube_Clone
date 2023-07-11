import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./SearchPage.css";
import VidCards from "../../components/VidCards/VidCards";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";

import axios from "axios";

const SearchPage = () => {
  const [vids, setVids] = useState([]);
  const [vidToPlay, setVidToPlay] = useState("");

  useEffect(() => {
    fetchInitialSearch();
  }, []);

  async function fetchInitialSearch() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=andor&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );
    // console.log("API Response");
    // console.log(response.data);
    setVids(response.data.items);
  }

  // Tests

  //   console.log("Video state test")
  //   console.log(vids)

  //   //   works when you specify specific array item
  //   console.log("Level one check - vids[0].id")
  //   console.log(vids[0].id)

  //   //   works when you specify specific array item
  //   console.log("Level one check - vids[0].snippet")
  //   console.log(vids[0].snippet)
  //   // works correctly!

  //   //   works when you specify specific array item
  //   console.log("Level two check - vids[0].snippet.title")
  //   console.log(vids[0].snippet.title)
  //   // works correctly!

  //   //   works when you specify specific array item
  //   console.log("Level three check - vids[0].snippet.thumbnails.default")
  //   console.log(vids[0].snippet.thumbnails.default)
  //   // returns height, width, and url - not sure how that will function when called

  // function to get array items from API / video state array

  function itemLoop() {
    for (let i = 0; i < vids.length; i++) {
      // console.log("Video ID:   " + vids[i].id.videoId);
      // console.log("Video Title:   " + vids[i].snippet.title);
      // console.log(
      //   "Video Thumbnail:   " + vids[i].snippet.thumbnails.medium.url
      // );
    }

    return itemLoop;
  }
  //   included because video thumbnails would not show if this code was not run previously (unsure why)

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setVidToPlay(videoID);
  // }

  return (
    <section className="container">
      <SearchBar setVids={setVids} />
      <div className="home-video-grid">
        {itemLoop()}
        {vids.map((item) => (
          <VidCards
            id={item.id.videoId}
            title={item.snippet.title}
            img={item.snippet.thumbnails.medium.url}
            // handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
};
export default SearchPage;
