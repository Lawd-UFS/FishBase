import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar/navbar";

//Pages
import HomePage from "../views/Homepage/HomePage";
import Register from "../views/Register";
import Transmission from "../views/Transmission";
import UserPage from "../views/UserPage";
import HoteisPage from "../views/HoteisPage";

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
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Ajuste aqui */}
            <Route path="/register" element={<Register />} /> 
            <Route path="/transmission" element={<Transmission />} /> 
            <Route path="/user" element={<UserPage />} /> {/* Ajuste aqui */}
            <Route path="/hoteis" element={<HoteisPage />} /> {/* Ajuste aqui */}
          </Routes>
        </Router>
      </AlertProvider>
    </LoadingProvider>
  </StrictMode>
);
};