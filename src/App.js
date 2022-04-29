import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VSState from "./context/VSState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
      </VSState>
    </Router>
  );
}

export default App;
