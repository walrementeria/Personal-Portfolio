import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
