import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
  <StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>    
  </ChakraProvider>

);
