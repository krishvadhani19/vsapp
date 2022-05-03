import React from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoDetail = ({ video }) => {
  const context = useContext(vsContext);
  const { mode } = context;
  if (!video) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div
      className="my-5 mx-3 text-center iframe"
      style={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        boxShadow: "1px 1px 4px",
      }}
    >
      <div>
        <iframe src={videoSrc} allowFullScreen title="Video Player"></iframe>
      </div>
      <div>
        <div className={`title${mode === "light" ? "" : "-dark"}`}>
          <strong>{video.snippet.title}</strong>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
