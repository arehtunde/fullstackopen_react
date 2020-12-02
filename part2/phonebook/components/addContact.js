const AddContact = (props) => {
  const {addName, newDetails, handleChange, handleNumber} = props;
  
  return (
    <form onSubmit={addName}>
      <div>
        Name: <input 
          type='text'
          value={newDetails.name}
          onChange={handleChange} 
          />
      </div>
      <div>
        Number: <input 
          type='tel'
          value={newDetails.number}
          onChange={handleNumber} 
          />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddContact;