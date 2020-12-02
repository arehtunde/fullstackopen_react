const Country = ({country}) => (
  <div>
    <h3>{country.name}</h3>

    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>

    <h4>Languages</h4>
    <ul>
      {
        country.languages.map(language => (
          <li key={language}>
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
  </div>
)

export default Country;
