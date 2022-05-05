import React from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const Home = () => {
  return (
    <div className="my-2">
      <div className="d-flex flex-column">
        <div className="">
          <VideoDetail />
        </div>
        <div>
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
