import React from "react";
import "./Desciption.css";

export default function Desciption() {
  return (
    <div class="row">
      <p class="col-sm-3" id="current-weather-attributes-description">
        Sunny Skies
      </p>
      <p class="col-sm-3" id="current-weather-attributes-humidity">
        humidity <span id="humidity"> 29 </span>
        <span>%</span>
      </p>
      <p class="col-sm-3" id="current-weather-attributes-windspeed">
        {" "}
        Wind Speed 29m/h{" "}
      </p>
    </div>
  );
}
