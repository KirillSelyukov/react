import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actions from '../store/actions';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.addHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deleteHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addHandler: (name, age) => dispatch({ type: actions.ADD, personData: { name: name, age: age } }),
        deleteHandler: (id) => dispatch({ type: actions.DELETE, id: id })
    }
};

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);