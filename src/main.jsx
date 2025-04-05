import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <App />
    </div>
  </StrictMode>
);
