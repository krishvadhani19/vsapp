import React from "react";
import vsContext from "./vsContext";
import { useState } from "react";
import YoutubeAPI from "../components/apis/YoutubeAPI";

const VSState = (props) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "vsApp - Dark Mode";
      document.body.style.backgroundColor = "#000613";
      document.body.style.color = "white";
    } else {
      document.title = "vsApp - Light Mode";
      document.body.style.backgroundColor = "#f5e1ff";
      document.body.style.color = "black";
      setMode("light");
    }
  };

  // Youtube api call
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (textFromSearchbar) => {
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: textFromSearchbar,
      },
    });
    setVideos(response.data.items);
    // console.log(typeof response.data.items);
    handleVideoSelect(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <vsContext.Provider
      value={{
        toggleMode,
        mode,
        handleSubmit,
        videos,
        selectedVideo,
        handleVideoSelect,
      }}
    >
      {props.children}
    </vsContext.Provider>
  );
};

export default VSState;
