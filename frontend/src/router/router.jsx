import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "../views/HomePage";
import Register from "../views/Register";
import Transmission from "../views/Transmission";

//Contexts
import { AlertProvider } from "../Context/AlertProvider/AlertProvider";
import { LoadingProvider } from "../Context/LoadingProvider/LoadingProvider";

//Style
import '../global.css';

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <LoadingProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Ajuste aqui */}
            <Route path="/register" element={<Register />} /> 
            <Route path="/transmission" element={<Transmission />} /> 
          </Routes>
        </Router>
      </AlertProvider>
    </LoadingProvider>
  </StrictMode>
);
}