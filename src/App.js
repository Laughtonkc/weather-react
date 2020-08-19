import React from 'react';
import Form from "./Form";
import City from "./City";
import Description from "./Desciption";
import './App.css';

export default function App() {
return (
    <div className="App">
      <div className="container shadow-sm mt-4" id="main-body">
        <Form />
        <City />
        <img
          id="current-weather-img"
          class="col-6"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Rainbow"
        />
        <Description />
      </div>
    </div>
  );
}
