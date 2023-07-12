import React from "react";

const RelatedVids = () => {
  return (
    <div className="related-vids">
      {relatedVids &&
        relatedVids.map((item) => (
          <VidCards
            id={item.id.videoId}
            title={item.snippet.title}
            img={item.snippet.thumbnails.medium.url}
            getVidDetails={getVidDetails}
            setRelatedVids={setRelatedVids}
          />
        ))}
    </div>
  );
};

export default RelatedVids;
