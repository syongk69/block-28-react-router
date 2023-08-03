import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        {/* <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div> */}
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
