import axios from 'axios'
import { useState, useEffect } from 'react'
import Title from './components/title'
import FilterSearch from './components/filter'
import AddContact from './components/addContact'
import DisplayContact from './components/DisplayContact'
import contactServices from './services/contact'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newDetails, setnewDetails] = useState({
    name: '', number: ''
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    contactServices
      .getRequest()
      .then(initialContacts => {
        setPersons(initialContacts);
      });
  }, [])

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

    contactServices
      .createRequest(detailsObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setnewDetails({
          name: '', number: ''
        })
      }) 
  }

  const removeContact = (name) => {
    /* const findContact = persons.findIndex(person => person.id !== id)
    console.log(findContact) */
    // const newContact = persons.find(person => person.id === id)
    // const url = `http://localhost:3001/persons/${newContact.id}`
    // setNotes(notes.map(note => note.id !== id ? note : returnedNote))  


    /* contactServices
      .deleteContact(findContact.id, findContact.name)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact)))
      }) */
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

  const filterName = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  return (
    <div>
      <Title title='Phonebook' />
      <FilterSearch filter={filter} handleFilter={handleFilter} />
      <Title title='Add new' />
      <AddContact 
        addName={addName}
        newDetails={newDetails}
        handleChange={handleChange}
        handleNumber={handleNumber}
      />
      <Title title='Numbers' />
      <DisplayContact 
        filterName={filterName}
        removeContact={removeContact}
      />
    </div>
  )
}

export default App;