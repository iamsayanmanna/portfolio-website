import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const preloader = document.getElementById("preloader");

requestAnimationFrame(() => {
  preloader?.remove();
});

const root = createRoot(document.getElementById("root"));

window.addEventListener("load", () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
