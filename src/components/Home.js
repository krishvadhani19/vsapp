import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return <div className="container">Home</div>;
};

export default Home;
