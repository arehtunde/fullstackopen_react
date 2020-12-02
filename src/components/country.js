import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './weather'

const Country = ({country}) => {
  const [weather, setWeather] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
      .then(response => {
        setWeather(response.data)
        setLoading(false)
      })
  }, [country.capital])

  if (loading) return (    
    <div>
        Retrieving information...
    </div>
  )

  return (
    <div>
      <h3>{country.name}</h3>
  
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
  
      <h4>Languages</h4>
      <ul>
        {
          country.languages.map(language => (
            <li key={language.name}>
              {language.name}
            </li>
          ))
        }
      </ul>
  
      <img 
        alt={country.name}
        src={country.flag}
        width='150'
        height='100'
      />

      <Weather weather={weather} />
    </div>
  )
}

export default Country;
