// General Imports
import "./VideoPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CommentContext from "../../context/CommentContext";

// Component Imports
import SearchBar from "../../components/SearchBar/SearchBar";
import Player from "../../components/Player/Player";
import VidsSidebar from "../../components/VidsSidebar/VidsSidebar";

// !TODO: Take search from vid page => back to homepage

const VideoPage = () => {
  const [relatedVids, setRelatedVids] = useState([]);
  const [playerDetails, setPlayerDetails] = useState([]);
  const { comments, setComments } = useContext(CommentContext);
  const { id } = useParams();

  async function fetchRelatedVids() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );

    setRelatedVids(response.data.items);
  }

  async function getVidDetails(videoId) {
    try {
      const details = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&fields=items(id,snippet(title,description))&part=snippet`
      );
      // console.log("API Response");
      setPlayerDetails(details.data.items[0]);
      // console.log(details.data.items[0]);
      // console.log("Player Details State");
      // console.log(playerDetails);

      fetchRelatedVids(details.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllComments() {
    const response = await axios.get(`http://127.0.0.1:8000/api/comment/${id}`);
    console.log(response.data);
    setComments(response.data);
  }

  useEffect(() => {
    getVidDetails(id);
    fetchRelatedVids();
    getAllComments(comments);
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
