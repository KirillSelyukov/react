import React, { PureComponent } from "react";
import { Person } from './Person';

export class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render');

        return this.props.persons.map((person, index) =>
            <Person
                key={person.id}
                userName={person.name}
                age={person.age}
                click={() => this.props.clicked(index)} />
        );
    }
}
