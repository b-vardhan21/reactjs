import React from 'react'

function Person({person}) {
    return (
        <div>

            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.skill}</h1>
        </div>
    )
}

export default Person
