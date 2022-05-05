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
        className={`my-3 p-3 d-flex container videoItem${
          mode === "light" ? "" : "-dark"
        }`}
        onClick={() => {
          handleVideoSelect(video);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        style={{
          borderRadius: "5px",
          // boxShadow: "1px 1px 4px",
          // width: "80vw",
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
