// General Imports
import "./VideoPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { useParams } from "react-router-dom";

// Component Imports
import SearchBar from "../../components/SearchBar/SearchBar";
import Player from "../../components/Player/Player";
import VidsSidebar from "../../components/VidsSidebar/VidsSidebar";



// !TODO: Take search from homepage => feed into player url
// !TODO: Take search from vid page => back to homepage
// !TODO: Update video details on new vid clicked - infinite loop!
// !TODO: Figure out why you have to disable title first before it runs

const VideoPage = () => {
  const [relatedVids, setRelatedVids] = useState([]);
  const [playerDetails, setPlayerDetails] = useState([]);
  const { id } = useParams();

  async function fetchRelatedVids() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );
    // console.log("API Response");
    // console.log(response.data.items);
    setRelatedVids(response.data.items);
  }

  async function getVidDetails(videoId) {
    try {
      const details = await axios.get(
        // `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&part=snippet&type=video);`
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&fields=items(id,snippet(title,description))&part=snippet`
      );
      console.log("API Response");
      setPlayerDetails(details.data.items[0]);
      console.log(details.data.items[0]);
      console.log("Player Details State");
      console.log(playerDetails);


      // console.log("State update 1: details.data.items");
      // setPlayerDetails(details.data.items);
      // console.log(playerDetails);

      // console.log("State update 2: details.data.items[0]");
      // setPlayerDetails(details.data.items[0]);
      // console.log(playerDetails);

      // console.log("State update 3: details.data");
      // setPlayerDetails(details.data);
      // console.log(playerDetails);

      // console.log("State update 4: details.items");
      // setPlayerDetails(details.items);
      // console.log(playerDetails);

      fetchRelatedVids(details.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVidDetails(id);
  }, []);

  return (
    <>
      <section className="player-page">
        <SearchBar />
        <div className="container">
          <Player
            id={id}
            playerDetails={playerDetails}
            relatedVids={relatedVids}
            setRelatedVids={setRelatedVids}
            getVidDetails={getVidDetails}
          />
          <VidsSidebar
            relatedVids={relatedVids}
            getVidDetails={getVidDetails}
            setRelatedVids={setRelatedVids}
          />
        </div>
      </section>
    </>
  );
};

export default VideoPage;

// PLAYER CODE

// // <div className="container">
// <div className="video-player">
// <iframe
//   width="900"
//   height="500"
//   src={`https://www.youtube.com/embed/${id}`}
// ></iframe>
// {/* <p className="video-title">{playerDetails[0].snippet.title}</p>
// <p className="video-description">{playerDetails[0].snippet.description}</p> */}

// RELATED VIDES CODE
// {/* <div className="related-vids">
// {relatedVids && relatedVids.map((item) => (
//   <VidCards
//     id={item.id.videoId}
//     title={item.snippet.title}
//     img={item.snippet.thumbnails.medium.url}
//     getVidDetails={getVidDetails}
//   />
// ))}
// </div> */}
