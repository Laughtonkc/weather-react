import React from "react";
import "./City.css";

export default function City() {
  return (
    <div class="media">
      <div class="media-body">
        <p id="todays-date">Monday, August 21, 2020</p>
        <div class="weather-tempature">
          <div class="row">
            <p class="col-6" id="current-temp">
              61
            </p>
            <span class="active">
              <a href="/" class="col-.5" id="fahrenheit-main">
                Fº
              </a>
            </span>
            <a href="/" class="col-.5" id="slash-main">
              /
            </a>
            <span class="inactive">
              <a href="/" class="col-.5" id="celsius-main">
                Cº
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
