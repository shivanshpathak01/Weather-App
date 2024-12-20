import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

function SearchBox( {updateInfo} ) {
    let[city,setCity] = useState("")
    let[error,setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cd317e1b3b59be982490a82ed9f10cfa"

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
        return result
        }catch(err){
            throw err;
        }
        
    }

    let handleChange = (e)=>{
        setCity(e.target.value)
    }

    let handleSubmit = async (e)=>{
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err){
            setError(true)
        }
    }
  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      {error && <p style={{color:"red"}}>No such place exist in our Database</p>}
      <br /><br />
      </form>
    </div>
  )
}

export default SearchBox
