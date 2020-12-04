import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getRequest = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createRequest = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updateRequest = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteContact = (id, name) => {
  const result = window.confirm(`Delete ${name}?`)

  if (result) {
      const request = axios.delete(`${baseUrl}/${id}`)
      request.then(response => response.data)    
      return console.log(`${baseUrl}/${id}`)
    }
}

const contactServices = { 
  getRequest, 
  createRequest, 
  updateRequest,
  deleteContact,
}

export default contactServices
