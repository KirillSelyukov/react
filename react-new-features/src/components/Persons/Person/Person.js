import React, { Component } from 'react';
import './Person.css';
import PropTypes from 'prop-types';

export class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    render() {
        console.log('[Person.js] Inside render');

        return <div className='Person' onClick={this.props.click}>
            <p>
                User Name: {this.props.userName}
            </p>
            <p>
                Age: {this.props.age}
            </p>
            <p>{this.props.children}</p>
        </div>
    }
}

Person.propTypes = {
    click: PropTypes.func,
    age:PropTypes.number,
    userName: PropTypes.string,
}

