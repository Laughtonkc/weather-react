import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow-sm mt-4" id="main-body">
        <Weather defaultCity="London"/>
       
      </div>
      <footer className="col-12" id="coder">
        <a
          id="github-link"
          href="https://github.com/Laughtonkc/weather-react"
        >
          Open Source code
        </a>
        <p> by Kelsey Laughton</p>
      </footer>
    </div>
  );
}
