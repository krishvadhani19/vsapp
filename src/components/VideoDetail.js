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
    <div className="mb-2 videoDetail">
      <div className="text-center">
        <iframe src={videoSrc} allowFullScreen title="Video Player"></iframe>
      </div>
      <div className="mx-2">
        <div className={`videoDetailTitle${mode === "light" ? "" : "-dark"}`}>
          <strong>{video.snippet.title}</strong>
        </div>
        <div className="videoDetailDescription">
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
