import React from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";
import { useEffect } from "react";

const VideoDetail = () => {
  useEffect(() => {
    // Inject YouTube API script
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.YT && onYouTubePlayerAPIReady();
  });

  const context = useContext(vsContext);
  const { mode, selectedVideo } = context;
  if (!selectedVideo) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?controls=0&enablejsapi=1&html5=1`;

  var player;

  // this function gets called when API is ready to use
  function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new window.YT.Player("video", {
      events: {
        // call this function when player is ready to use
        onReady: onPlayerReady,
      },
    });
  }

  function onPlayerReady() {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
      player.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () {
      player.pauseVideo();
    });

    var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function () {
      player.stopVideo();
    });
  }

  return (
    <div className="mb-2 videoDetail">
      <div className="text-center">
        <iframe id="video" src={videoSrc} frameBorder="0"></iframe>
      </div>
      <div className="bittons text-center">
        <button
          className={`button${mode === "light" ? "" : "-dark"} mx-2 my-2 py-2`}
          id="play-button"
        >
          Play
        </button>
        <button
          className={`button${mode === "light" ? "" : "-dark"} mx-2  my-2 py-2`}
          id="pause-button"
        >
          Pause
        </button>
        <button
          className={`button${mode === "light" ? "" : "-dark"} mx-2 my-2  py-2`}
          id="stop-button"
        >
          Stop
        </button>
      </div>
      <div className="mx-2 container mx-auto">
        <div className={`videoDetailTitle${mode === "light" ? "" : "-dark"}`}>
          {selectedVideo.snippet.title}
        </div>
        <div className="videoDetailDescription">
          {selectedVideo.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
