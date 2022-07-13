import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderMethod = module.hot ? render : hydrate;

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
