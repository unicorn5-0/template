import { useEffect, useState } from 'react';
import personService from './services/phonebook';
import './App.css';

function App() {
  const [person, setPerson] = useState([]);

  const [newName, setNewName] = useState('');

  const [newNumber, setNewNumber] = useState('');

  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    personService
        .getAll()
        .then((initialPerson) => {
          setPerson(initialPerson)
        }) 
  }, [])
  

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
                .create(personObject)
                .then(returnedPerson => {
                  setPerson(person.concat(returnedPerson))
                  setNewName('')
                  setNewNumber('')
                })
                
                
  }
 
  const handleFilter = (e) => {
    setShowAll(false)
    person.filter((person) => person.name === e.target.value)
  }

  const personToShow = showAll ? person : handleFilter()

  const handleDelete = (id) => {
    personService
                .deletePerson(id)
                .then(returnedPerson => {
                  console.log(returnedPerson);
                                
                                setPerson(person.map(p => p.id !== id ? p : returnedPerson ))
                                
    })
  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
          filter shown with: <input onChange={handleFilter} />
        </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewName} />
        </div>
        <div>
          phone: <input onChange={handleNewNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personToShow.map((person) => <p key={person.id}>
            {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button>
          </p>)}
      </div>
    </div>
  );
}

export default App;
