import React, { useState, useEffect } from "react";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { KEY } from "../../localKey";
import VidCards from "../../components/VidCards/VidCards";
import { useParams } from "react-router-dom";

// !TODO: Take search from homepage => feed into player url
// !TODO: Take search from vid page => back to homepage
// !TODO: Update video details on new vid clicked - infinite loop!
// !TODO: Figure out why you have to disable title first before it runs

const VideoPage = () => {
  const [relatedVids, setRelatedVids] = useState([]);
  const [playerDetails, setPlayerDetails] = useState({});
  const { id } = useParams();

  async function fetchRelatedVids() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );
    // console.log("API Response");
    // console.log(response.data.items);
    setRelatedVids(response.data.items);
  }

  async function getVidDetails() {
    try {
      const detailsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${KEY}&part=snippet&type=video);`
      );
      console.log("Video player details");
      console.log(detailsResponse.data.items);
      setPlayerDetails(detailsResponse.data.items);
      fetchRelatedVids(detailsResponse.data.items)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // fetchRelatedVids();
    getVidDetails();
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
              height="500"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
            <p className="video-title">{playerDetails[0].snippet.title}</p>
            <p className="video-description">{playerDetails[0].snippet.description}</p>
            <div className="comments">Comments</div>
          </div>
          <div className="related-vids">
            {relatedVids && relatedVids.map((item) => (
              <VidCards
                id={item.id.videoId}
                title={item.snippet.title}
                img={item.snippet.thumbnails.medium.url}
                getVidDetails={getVidDetails}
                setRelatedVids={setRelatedVids}
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

// &fields=items(id,snippet(title,description))
