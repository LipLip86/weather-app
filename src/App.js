import React, { useEffect, useState} from "react";
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

const [name, setName] = useState('');

// useEffect(() => {

// }, [])

const handleClick = () => {
  if (name !== '') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bc0bcac6f83b37e289c4657b266641b1&units=metric`;
  axios.get(url)
  .then(res => {
    setData({...data, celcius: res.data.main.temp, name: res.data.name,
      weather: res.data.weather[0].main,
      feels: res.data.main.feels_like,
      humidity:res.data.main.humidity, wind: res.data.wind.speed})
  })
  .catch (err => console.log(err));
}
}

  return (
    <div className="app">
    <div className="search">
    <input
  type="text"
  placeholder="Enter Location"
  onChange={(e) => setName(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  }}
/>
    </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
          </div>
          <div className="temperature">
            <h1>{Math.round(data.celcius)}C</h1>
          </div>
          <div className="description">
            <p>{data.weather}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold>">{Math.round(data.feels)}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold>">{Math.round(data.humidity)}</p>
            <p>Humidity</p>
          </div>
          <div className="wind>">
            <p className="bold">{Math.round(data.wind)}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
