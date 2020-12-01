const DisplayContact = ({filterName}) => (
  <ul>
    {
      filterName.map((person) => 
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      )
    }
  </ul>
)

export default DisplayContact;
