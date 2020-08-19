import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="media">
      <div className="media-body">
        <p id="todays-date">Monday, August 21, 2020</p>
        <div className="weather-tempature">
          <div className="row">
            <p className="col-6" id="current-temp">
              61
            </p>
            <span className="active">
              <a href="/" className="col-.5" id="fahrenheit-main">
                Fº
              </a>
            </span>
            <a href="/" className="col-.5" id="slash-main">
              /
            </a>
            <span className="inactive">
              <a href="/" className="col-.5" id="celsius-main">
                Cº
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
