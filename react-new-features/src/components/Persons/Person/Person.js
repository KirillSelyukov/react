import React from 'react';
import './Person.css';

export const Person = (props) => {
    return (
        <div className='Person' onClick={props.click}>
            <p>
                User Name: {props.userName}
            </p>
            <p>
                Age: {props.age}
            </p>
            <p>{props.children}</p>
        </div>
    );

}
