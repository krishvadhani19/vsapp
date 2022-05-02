import React from "react";
import "../css/youtube.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div
      className="my-5 mx-3 text-center iframe"
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "1px 1px 4px",
      }}
    >
      <div>
        <iframe src={videoSrc} allowFullScreen title="Video Player"></iframe>
      </div>
      <div>
        <div className="title">
          <strong>{video.snippet.title}</strong>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
