import React from "react";
// import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Show from "./components/Show";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
