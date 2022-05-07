import React from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Home = () => {
  const context = useContext(vsContext);
  const { mode } = context;
  return (
    <div className={`home-background${mode === "light" ? "" : "-dark"}`}>
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
