import React, {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";

//require('dotenv').config();

function App() {

    const [dados, setDados] = useState(null);
    const [forecast, setforecast] = useState(null);

    let newDate = new Date();
    let weekday = newDate.toLocaleDateString('en-US', {
        weekday: 'long',
      });
    let day = newDate.getDate();
    let month = newDate.toLocaleDateString('en-us', { month:"short"});
    let year = newDate.getFullYear();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=<YOUR_KEY>&q=Viseu&days=4');
          const jsonData = await response.json();
          setDados(jsonData);
        
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      };
  
      fetchData();
    }, []);
  
   
      if (!dados) {
        return <div>Carregando...</div>;
      }
      
  
    const nomelocalizacao = dados.location.name;
    const graus = dados.current.temp_c;
    const condition = dados.current.condition.text;
    const icon = dados.current.condition.icon;
    const windkph = dados.current.wind_kph;
    const humidity = dados.current.humidity;

    console.log(dados.forecast.forecastday[0].date)

    return (
      <div>

      <WeatherCard locationName = {nomelocalizacao} graus={graus} condition= {condition} icon={icon} wind = {windkph} humidity={humidity} weekday={weekday} month={month} day ={day} year={year} forecast={dados.forecast} />
      
      </div>
      
    );
  }
  
  export default App;