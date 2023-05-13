import React, { useState} from "react";
import axios from "axios";

function App() {

  const [data, setData ] = useState({
    celcius: 10.63,
    name: "London",
    weather: "Clear",
    feels: 10.12,
    humidity: 91,
    wind: 3.6
  })
  const [name, setName] = useState('')

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bc0bcac6f83b37e289c4657b266641b1&units=metric';

  const searchLocation = (event) => {
    if (name !== "") {
      axios.get(url).then((resp) => {
        console.log(resp.data)
        setData({...data, celcius: resp.data.main.temp, name: resp.data.name,
          weather: resp.data.weather.main, humidity:
          resp.data.main.humidity, wind: resp.data.wind})
      })
    .catch( err => console.log(err));
    }}


  return (
    <div className="app">
    <div className="search">
    <input value={name}
    onChange={event => setName(event.target.value)}
    onMouseEnter={searchLocation}
    placeholder="Enter Location"
    type="text"></input>

    </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p></p>
          </div>
          <div className="temperature">
            <h1>{Math.round(data.celcius)}C</h1>
          </div>
          <div className="description">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold>">{data.feels}F</p>
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
