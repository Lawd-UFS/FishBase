import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";


const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ajuste aqui */}
    </Routes>
    </Router>
  </StrictMode>
);
}