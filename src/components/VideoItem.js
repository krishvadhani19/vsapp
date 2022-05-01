import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => {
        handleVideoSelect(video);
      }}
      style={{
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "1px 1px 4px",
      }}
      className="text-center my-5"
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="">
        <strong>{video.snippet.title}</strong>
      </div>
    </div>
  );
};

export default VideoItem;
