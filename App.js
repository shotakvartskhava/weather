import React, { useState } from 'react';
import './index.css';
const api = {
key: "ad78e6298b3ea136895fef74ceeed2c7",
base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const Search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
         .then(res => res.json())
         .then(result => {
          setQuery('');
          console.log(result);
         
          setWeather(result);
      });
  }
}

  const dateBuilder = (d) =>  {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
   return `${day} ${date} ${month} ${year}`
  
  }
  

  return (
    <div className="app">
      <main>
       <div className="search-box">
       <input
        type="Text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={Search}
         
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
         <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
         </div>
        <div className="weater-box"/>
          <div className="temp">
          {Math.round(weather.main.temp)} °C  
         </div>
        <div className="weather">{weather.weather[0].main}</div>
        </div>) : ('')}
        
    </main>
  </div>
  );
}

export default App;
