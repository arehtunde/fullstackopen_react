const Weather = ({weather}) => (
  <div>
    <h3>Weather in {weather.location.name}</h3>

    <p>Temperature: {weather.current.temperature}°C</p>
    <p>Wind: {weather.current.wind_speed}km/h — direction: {weather.current.wind_dir}</p>

    <img 
      alt={weather.current.weather_descriptions}
      src={weather.current.weather_icons}
    />
  </div>
)

export default Weather;