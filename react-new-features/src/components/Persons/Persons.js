import React, { Component } from "react";
import { Person } from './Person';


export class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) =>
            <Person
                key={person.id}
                userName={person.name}
                age={person.age}
                click={() => this.props.clicked(index)} />
        );
    }
}
