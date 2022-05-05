import React from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import vsContext from "../context/vsContext";
import { useContext } from "react";

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
