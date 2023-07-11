import React, { useState, useEffect } from "react";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { KEY } from "../../localKey";
import VidCards from "../../components/VidCards/VidCards";

// !TODO: Take search from homepage => feed into player url

const VideoPage = () => {
  const [relatedVids, setRelatedVids] = useState([]);

  async function fetchRelatedVids() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=pMGJdLupS9c&type=video&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );
    console.log("API Response");
    console.log(response.data.items);
    setRelatedVids(response.data.items);
  }

  useEffect(() => {
    fetchRelatedVids();
  }, []);

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
            <div className="comments">Comments</div>
          </div>
          <div className="related-vids">
            {relatedVids.map((item) => (
              <VidCards
                id={item.id.videoId}
                title={item.snippet.title}
                img={item.snippet.thumbnails.medium.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPage;

// {relatedVids.map((item) => (
//     <VidCards
//       id={item.id.videoId}
//       title={item.snippet.title}
//       img={item.snippet.thumbnails.medium.url}
