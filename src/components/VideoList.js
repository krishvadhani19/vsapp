import React from "react";
import VideoItem from "./VideoItem";
import "../css/youtube.css";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return (
    <div
      className="mb-5 align-items-center p-2 overflow-auto m-auto videoList"
      style={{
        borderRadius: "5px",
        boxShadow: "1px 1px 4px",
        height: "80vh",
        width: "80vw",
      }}
    >
      {renderedVideos}
    </div>
  );
};

export default VideoList;
