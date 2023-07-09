import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./SearchPage.css";
import VidCards from "../../components/VidCards/VidCards";
import { KEY } from "../../localKey";

import axios from "axios";

const SearchPage = () => {
  const [vids, setVids] = useState([]);

  useEffect(() => {
    fetchInitialSearch();
  }, []);

  async function fetchInitialSearch() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=andor&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/default))&part=snippet`
    );
    console.log('API Response');
    console.log(response.data);
    setVids(response.data.items);
  }

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
function itemLoop () {

    for (let i = 0; i < vids.length; i++) {

        console.log("Video ID:   " + vids[i].id.videoId)
        console.log("Video Title:   " + vids[i].snippet.title)
        console.log("Video Thumbnail:   " + vids[i].snippet.thumbnails.default.url)
    }

    return itemLoop;
  }

  return (
    <div className="container">
      <section className="home-video-grid">
        {itemLoop()}
      </section>
    </div>
  );
};
export default SearchPage;



// {vids.map((item) => (
//     <VidCards vids={vids} />
//   ))}

        {/* <p>Title:{vids.items.snippet.title[0]}</p>
        <p>Description:{vids.items.snippet.description[0]}</p> */}
