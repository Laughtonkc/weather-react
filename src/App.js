import React from "react";
import Form from "./Form";
import City from "./City";
import Description from "./Desciption";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow-sm mt-4" id="main-body">
        <Form />
        <City />
        <img
          id="current-weather-img"
          className="col-6"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Rainbow"
        />
        <Description />
      </div>
      <footer className="col-12" id="coder">
        <a
          id="github-link"
          href="https://github.com/Laughtonkc/weather-react"
          target="_blank"
        >
          Open Source code
        </a>
        <p> by Kelsey Laughton</p>
      </footer>
    </div>
  );
}
