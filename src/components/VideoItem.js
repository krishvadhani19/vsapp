import React from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  const context = useContext(vsContext);
  const { mode } = context;
  return (
    <>
      <hr className="container" />
      <div
        className={`my-3 d-flex container p-0 videoItem${
          mode === "light" ? "" : "-dark"
        }`}
        onClick={() => {
          handleVideoSelect(video);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        style={{
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
          style={{ cursor: "pointer" }}
        />
        <div>
          <div
            className="m-auto mx-2 my-1"
            id={`videoItemTitle${mode === "light" ? "" : "-dark"}`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleVideoSelect(video);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <strong>{video.snippet.title}</strong>
          </div>
          <div
            className="m-auto mx-2 my-1"
            id={`videoItemDescription${mode === "light" ? "" : "-dark"}`}
          >
            {video.snippet.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
