import { useState } from "react";
import SearchLocation from "./search";
import './weather.css';

export default function Weather() {

    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const api = 'f6b9acfc3dade8544cda410f0c6c8fa2';
    // let main, wind, weather;

    async function fetchWeatherData(param) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${api}`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setError(null);
                setLoading(false);
                // main = data.main;
                // wind = data.wind;
                // weather = data.weather;
            }
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    console.log(weatherData);
    function handleSearch() {
        fetchWeatherData(location);
    }
    if (loading) {
        return <div>Fetching weather data. Please wait...</div>
    }
    if (error) {
        return <div>An error occured {error}</div>
    }
    return (
        <div className="weather-details-container">
            <SearchLocation location={location} setLocation={setLocation} searchWeather={handleSearch}></SearchLocation>
            {
                weatherData ?
                    <div>
                        <h3>{weatherData.name}</h3>
                        <p>{weatherData.weather[0].description} {weatherData.clouds.all}%</p>
                        <p>Temp: <br /></p>
                        <p>Max: {weatherData.main.temp_max}K</p>
                        <p>Min: {weatherData.main.temp_min}K</p>
                        <p>Wind: <br />
                            speed: {weatherData.wind.speed}m/s<br />
                            direction: {weatherData.wind.deg}°<br />
                            gust: {weatherData.wind.gust}m/s
                        </p>
                    </div>
                    : null
            }
        </div>
    )
}