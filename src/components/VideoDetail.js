import React from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const VideoDetail = () => {
  const context = useContext(vsContext);
  const { mode, selectedVideo } = context;
  if (!selectedVideo) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="mb-2 videoDetail">
      <div className="text-center">
        <iframe src={videoSrc} frameborder="0"></iframe>
      </div>
      <div className="mx-2">
        <div className={`videoDetailTitle${mode === "light" ? "" : "-dark"}`}>
          <strong>{selectedVideo.snippet.title}</strong>
        </div>
        <div className="videoDetailDescription">
          {selectedVideo.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
