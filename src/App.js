import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VSState from "./context/VSState";

function App() {
  return (
    <VSState>
      <Navbar />
      <Home />
    </VSState>
  );
}

export default App;
