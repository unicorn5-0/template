import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then(res => res.data);
}

const create = (createdPerson) => {
    const req = axios.post(baseUrl, createdPerson);
    return req.then(res => res.data)
}

const update = (id, changedPerson) => {
    const req = axios.put(`${baseUrl}/${id}`, changedPerson);
    return req.then(res => res.data)
}

    
const deletePerson = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`);
    return(req.then(res => res.data))
}

const personService = {getAll, create, update, deletePerson}

export default personService