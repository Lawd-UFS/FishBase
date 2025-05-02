import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "../views/HomePage";
import Register from "../views/Register";

//Style
import '../global.css';

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ajuste aqui */}
        <Route path="/register" element={<Register />} /> 
    </Routes>
    </Router>
  </StrictMode>
);
}