// General Imports
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey";


const VideoDetails = () => {

  const [playerDetails, setPlayerDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getVidDetails(id);
  }, []);

  async function getVidDetails(videoId) {
    try {
      const details = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&fields=items(id,snippet(title,description))&part=snippet`
      );
      console.log("API Response");
      setPlayerDetails(details.data.items[0]);
      console.log(details.data.items[0]);
      console.log("Player Details State");
      console.log(playerDetails);

      // fetchRelatedVids(details.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      PlayerDetails
      {console.log(playerDetails)}
      {playerDetails}
      <p className="video-title">{playerDetails[0].snippet.title}</p>
      <p className="video-description">
        {playerDetails[0].snippet.description}
      </p>
    </div>
  );
};

export default VideoDetails;


// async function getVidDetails(videoId) {
//   try {
//     const details = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&fields=items(id,snippet(title,description))&part=snippet`
//     );
//     console.log("API Response");
//     setPlayerDetails(details.data.items[0]);
//     console.log(details.data.items[0]);
//     console.log("Player Details State");
//     console.log(playerDetails);

//     // fetchRelatedVids(details.data.items);
//   } catch (error) {
//     console.log(error);
//   }
// }
