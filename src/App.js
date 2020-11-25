import React, { useState } from 'react'

const Title = ({title}) => <h2>{title}</h2>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newDetails, setnewDetails] = useState({
    name: '', number: ''
  })
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const detailsObject = {
      name: newDetails.name,
      number: newDetails.number,
    }

    const testName = persons.some(person => person.name === newDetails.name)

    if (testName) {
      alert(`${newDetails.name} is already added to phonebook`)
      return setnewDetails({
        name: '', number: ''
      })
    } 

    setPersons(persons.concat(detailsObject))
    setnewDetails({
      name: '', number: ''
    })
  }

  const handleChange = (event) => {
    setnewDetails({
      ...newDetails,
      name: event.target.value,
    })
  }

  const handleNumber = (event) => {
    setnewDetails({
      ...newDetails,
      number: event.target.value
    })
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filterNumber = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  return (
    <div>
      <Title title='Phonebook' />
      <div>
        filter shown with: <input
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <Title title='Add new' />
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newDetails.name}
            onChange={handleChange} 
            />
        </div>
        <div>
          number: <input 
            value={newDetails.number}
            onChange={handleNumber} 
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Title title='Numbers' />
      <ul>
        {
          filterNumber.map((person) => 
            <li key={person.name}>{person.name} {person.number}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App;