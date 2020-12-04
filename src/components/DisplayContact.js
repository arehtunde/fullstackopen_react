const DisplayContact = ({filterName, removeContact}) => (
  <ul>
    {
      filterName.map((person) => 
        <li key={person.name}>
          {person.name} {person.number} {' '}
          <button onClick={removeContact}>delete</button>
        </li>
      )
    }
  </ul>
)

export default DisplayContact;