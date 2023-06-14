import React, {useEffect, useState} from "react";


function WeatherCard(props) {

    
    
  console.log(props.forecast)

  function shortWeekday(date){
    const dataObjeto = new Date(date);

    const options = { weekday: 'short' };

    const diaDaSemana = dataObjeto.toLocaleDateString('en-US', options);
    
    return diaDaSemana;
  }

    return (
        <div className="container">
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{props.weekday}</h2><span className="date-day">{props.day} {props.month} {props.year}</span><span className="location">{props.locationName}</span>
          </div>
          <div className="weather-container"><img src= {props.icon} className="weather-icon" data-feather="sun"></img>
            <h1 className="weather-temp">{props.graus} °C</h1>
            <h3 className="weather-desc">{props.condition}</h3>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
                <div className="clear"></div>
              </div>
              <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{props.humidity} %</span>
                <div className="clear"></div>
              </div>
              <div className="wind"> <span className="title">WIND</span><span className="value">{props.wind} km/h</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              <li className="active"><img src= {props.forecast.forecastday[0].day.condition.icon} className="day-icon" data-feather="sun"></img><span className="day-name">Tue</span><span className="day-temp">{props.forecast.forecastday[0].day.avgtemp_c}°C</span></li>
              <li><img  src= {props.forecast.forecastday[1].day.condition.icon} className="day-icon" data-feather="cloud"></img><span className="day-name">Wed</span><span className="day-temp">{props.forecast.forecastday[1].day.avgtemp_c}°C</span></li>
              <li><img src= {props.forecast.forecastday[2].day.condition.icon} className="day-icon" data-feather="cloud-snow"></img><span className="day-name">Thu</span><span className="day-temp">{props.forecast.forecastday[2].day.avgtemp_c}°C</span></li>
              <li><img src= {props.forecast.forecastday[3].day.condition.icon} className="day-icon" data-feather="cloud-rain"></img><span className="day-name">Fry</span><span className="day-temp">{props.forecast.forecastday[3].day.avgtemp_c}°C</span></li>
              <div className="clear"></div>
            </ul>
          </div>
          <div className="location-container">
            <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;