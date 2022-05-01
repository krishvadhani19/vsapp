import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    console.log(video.id);
  });
  return (
    <div
      className="my-5 align-items-center"
      style={{
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "1px 1px 4px",
        backgroundColor: "#323232",
        color: "white",
      }}
    >
      {renderedVideos}
    </div>
  );
};

export default VideoList;
