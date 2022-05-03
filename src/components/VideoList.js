import React from "react";
import VideoItem from "./VideoItem";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoList = ({ videos, handleVideoSelect }) => {
  const context = useContext(vsContext);
  const { mode } = context;
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
      className={`mb-5 align-items-center p-2 overflow-auto m-auto videoList${
        mode === "light" ? "" : "-dark"
      }`}
      style={{
        borderRadius: "0.5rem",
      }}
    >
      {renderedVideos}
    </div>
  );
};

export default VideoList;
