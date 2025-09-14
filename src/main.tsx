import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Somente /standard renderiza o App */}
        <Route path="/standard" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
