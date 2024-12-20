import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1638798169533-d7ef809e5bd6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1727819498447-c037fbd41b30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZ2h0JTIwc3VufGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1670002482706-29a3ba4059a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

    return (
        <div className='InfoBox'>
          <div className='cardContainer'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 250,width:'100%' }}
            image={info.humidity > 80 ? RAIN_URL : (info.temp > 20) ? HOT_URL : COLD_URL}
            title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 20) ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temperature = {info.tempMin}&deg;C</p>
          <p>Max Temperature = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i><b>{info.weather}</b></i> and it feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

export default InfoBox
