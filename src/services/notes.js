import axios from "axios"
const baseUrl = '/api/notes'

const getAll = () => {
    const req = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    }
        
    return req.then(res => res.data.concat(nonExisting))
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const update = (id, changedObject) => {
    const req = axios.put(`${baseUrl}/${id}`, changedObject)
    return req.then(res => res.data)
}

const noteService = { getAll, create, update }


export default noteService