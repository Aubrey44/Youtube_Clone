import React, { useState } from "react";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { KEY } from "../../localKey";
import VidCards from "../../components/VidCards/VidCards";


// !TODO: Take search from homepage => feed into player url

const VideoPage = () => {

    const [relatedVids, setRelatedVids] = useState ([]);



    async function fetchRelatedVids() {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=pMGJdLupS9c&type=video&key=${KEY}`
        );
        console.log("API Response");
        console.log(response.data);
        setRelatedVids(response.data);
      }
    
    // https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE} //




  return (
    <>
      <section className="player-page">
        <SearchBar />
        <div className="container">
          <div className="video-player">            
            <iframe
              width="900"
              height="450"
              src="https://www.youtube.com/embed/pMGJdLupS9c"
            ></iframe>
            <p>Video Name</p>
            <p>Description</p>
          </div>
          <div className="related-vids">Related Videos{fetchRelatedVids()}</div>
        </div>
        <div className="comments">Comments</div>
      </section>
    </>
  );
};

export default VideoPage;
