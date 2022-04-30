import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      setCredentials({ email: "", password: "" });
      navigate("/");
      localStorage.setItem("token", json.authToken);
    } else {
      setCredentials({ email: "", password: "" });
      navigate("/login");
      alert("Inavlid Credentials!");
    }
  };
  return (
    <div
      className="container my-5"
      style={{
        fontSize: "19px",
        boxShadow: "2px 2px 8px",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            placeholder="example@email.com"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password must have atleast 5 characters"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={credentials.password.length < 5}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
