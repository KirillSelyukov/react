import React, { Component } from 'react';
import './Person.css';


export class Person extends Component {
    render() {
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
