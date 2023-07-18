import React from "react";
import VidCards from "../VidCards/VidCards";

const VidsSidebar = ({ relatedVids }) => {
  return (
    <div className="related-vids">
      {relatedVids &&
        relatedVids.map((item) => (
          <VidCards
            key={item.id.videoId}
            id={item.id.videoId}
            title={item.snippet.title}
            img={item.snippet.thumbnails.medium.url}
          />
        ))}
    </div>
  );
};

export default VidsSidebar;
