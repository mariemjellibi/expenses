// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import { DarkModeProvider } from "./context/DarkModeContext";
// import store from "./store/store";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> </Provider> */}
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
   
  </StrictMode>
);
