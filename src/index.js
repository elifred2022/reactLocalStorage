import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/* <React.StrictMode>
    <App />
  </React.StrictMode>     React.StrictMode lo quito porque uando se refresca quita lo guardado en localstorage*/
