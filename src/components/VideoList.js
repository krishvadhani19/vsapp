import React from "react";
import VideoItem from "./VideoItem";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoList = () => {
  const context = useContext(vsContext);
  const { mode, videos, handleVideoSelect } = context;
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
      className={` mt-2 align-items-center p-2 overflow-auto m-auto videoList${
        mode === "light" ? "" : "-dark"
      }`}
    >
      {renderedVideos}
    </div>
  );
};

export default VideoList;
