import React from 'react'

const Person = ({handleClick, id, name, number}) => {
  return (
    <div>
        <p key={id}>{name} {number}</p>
        <button onClick={handleClick}>delete</button>
    </div>
  )
}

export default Person