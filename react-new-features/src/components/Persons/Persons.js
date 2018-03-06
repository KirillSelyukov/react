import React from "react";
import { Person } from './Person';

export const Persons = (props) => props.persons.map((person, index) =>
    <Person
        key={person.id}
        userName={person.name}
        age={person.age}
        click={() => props.clicked(index)} />
)
