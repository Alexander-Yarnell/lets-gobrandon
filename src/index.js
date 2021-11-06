import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";


//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Css
import "./css/Home.css";

function Spa() {
  return (
    <div>
      <Home/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById("root")
);
