import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  return <div className="container">Home</div>;

  // useEffect(() => {
  //   if (token) {
  //     return <div className="container">Home</div>;
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);
};

export default Home;
