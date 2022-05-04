import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VSState from "./context/VSState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </VSState>
    </Router>
  );
}

export default App;
