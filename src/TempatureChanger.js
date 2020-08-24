import React, { useState } from "react";

export default function TempatureChanger(props) {
    const [unit, setUnit] = useState("imperial");


  function convertCelsius(event) {
      event.preventDefault();
      setUnit("metirc");
}
function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
}


    if (unit === 'imperial') {
return (
  <div className="weather-tempature">
    <div className="row">
      <p className="col-6" id="current-temp">
        {Math.round(props.imperial)}
      </p>
      <span className="active">
        <a
          href="/"
          className="col-.5"
          id="fahrenheit-main"
          onClick={convertFahrenheit}
        >
          Fº
        </a>
      </span>
      <a href="/" className="col-.5" id="slash-main">
        /
      </a>
      <span className="inactive">
        <a
          href="/"
          className="col-.5"
          id="celsius-main"
          onClick={convertCelsius}
        >
          Cº
        </a>
      </span>
    </div>
  </div>
);
} else {
    let metric = ((props.imperial  - 32) * 5) / 9;

 return (
  <div className="weather-tempature">
    <div className="row">
      <p className="col-6" id="current-temp">
        {Math.round(metric)}
      </p>
      <span className="active">
        <a
          href="/"
          className="col-.5"
          id="fahrenheit-main"
          onClick={convertFahrenheit}
        >
          Fº
        </a>
      </span>
      <a href="/" className="col-.5" id="slash-main">
        /
      </a>
      <span className="inactive">
        <a
          href="/"
          className="col-.5"
          id="celsius-main"
          onClick={convertCelsius}
        >
          Cº
        </a>
      </span>
    </div>
  </div>
 );
}
    
}