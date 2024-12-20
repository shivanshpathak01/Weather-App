import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

import React, { useState } from 'react'

function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState ({
        city:"Sultanpur",
        feelsLike:13.31,
        humidity:41,
        temp:14.71,
        tempMax:14.71,
        tempMin:14.71,
        weather:"haze"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
