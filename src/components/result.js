import Country from './country'

const Result = ({countryList}) => {
  if (countryList === 0) {
    return <p>Please search for a country</p>
  } else if (countryList.length > 10) {
      return <p>Too many matches, please specify another filter</p>
  } else if (countryList.length === 1) {
      return (
        <ul>
          {
            countryList.map(country => 
              <Country 
                key={country.name}
                country={country}
              />
            )
          }
        </ul>
      )
    } else {
      return (
        <ul>
          {
            countryList.map(country => 
              <li key={country.name}>
                {country.name}
              </li>
            )
          }
        </ul>
      )
  }
}

export default Result;