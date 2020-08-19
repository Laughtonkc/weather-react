import React from "react";
import "./Desciption.css";

export default function Desciption() {
  return (
    <div className="row">
      <p className="col-sm-3" id="current-weather-attributes-description">
        Sunny Skies
      </p>
      <p className="col-sm-3" id="current-weather-attributes-humidity">
        humidity <span id="humidity"> 29% </span>
      </p>
      <p className="col-sm-3" id="current-weather-attributes-windspeed">
        {" "}
        Wind Speed 29m/h{" "}
      </p>
    </div>
  );
}
