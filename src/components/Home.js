import React from "react";
import { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import YoutubeAPI from "./apis/YoutubeAPI";
import Searchbar from "./Searchbar";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (textFromSearchbar) => {
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: textFromSearchbar,
      },
    });
    setVideos(response.data.items);
    handleVideoSelect(response.data.items[0]);
  };

  useEffect(() => {
    handleSubmit("ipl");
    console.log("text");
  });

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="container my-5">
      {/* {handleSubmit("ipl")} */}
      <Searchbar handleFormSubmit={handleSubmit} />
      <div className="d-flex flex-column">
        <div className="">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="">
          <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default Home;
