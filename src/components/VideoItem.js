import React from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  const context = useContext(vsContext);
  const { mode } = context;
  return (
    <div
      className="mx-auto my-3 p-3 d-flex videoItem"
      onClick={() => {
        handleVideoSelect(video);
      }}
      style={{
        borderRadius: "5px",
        boxShadow: "1px 1px 4px",
        // width: "80vw",
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div>
        <div
          className="m-auto mx-2 my-1"
          id={`title${mode === "light" ? "" : "-dark"}`}
        >
          <strong>{video.snippet.title}</strong>
        </div>
        <div className="m-auto mx-2 my-1" id="description">
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
