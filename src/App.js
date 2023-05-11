import React, { useState} from "react"
import axios from "axios"

function App() {
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=bc0bcac6f83b37e289c4657b266641b1'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Berlin</p>
          </div>
          <div className="temperature">
            <h1>292F</h1>
          </div>
          <div className="description">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold>">291F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold>">38</p>
            <p>Humidity</p>
          </div>
          <div className="wind>">
            <p className="bold">8.49</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
