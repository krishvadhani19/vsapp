import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VSState from "./context/VSState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      {/* Context API */}
      <VSState>
        {/* Navbar */}
        <Navbar />
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />}></Route>
          {/* Login */}
          <Route exact path="/login" element={<Login />}></Route>
          {/* Signup */}
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </VSState>
    </Router>
  );
}

export default App;
