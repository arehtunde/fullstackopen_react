import axios from 'axios'
import { useState, useEffect } from 'react'
import FilterSearch from './components/filter'
import Result from './components/result'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(true)

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      setCountries(response.data);
    });
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
    setMessage(false)
  } 

  const filterCountries = message
  ? 0
  : countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h1>Find Countries</h1>
      <FilterSearch handleChange={handleChange} />
      <Result countryList={filterCountries} />
    </>
  )
}

export default App;