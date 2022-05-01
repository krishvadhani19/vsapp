import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div
      className="my-5 mx-3 text-center"
      style={{ padding: "10px", borderRadius: "5px", boxShadow: "1px 1px 4px" }}
    >
      <div>
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video Player"
          width="400px"
          height="200px"
        ></iframe>
      </div>
      <div>
        <h4 className="">
          <strong>{video.snippet.title}</strong>
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
