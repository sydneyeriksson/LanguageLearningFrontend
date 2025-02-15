import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FlashCards from "./pages/FlashCards";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flash-cards" element={<FlashCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
