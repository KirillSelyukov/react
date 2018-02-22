import React from 'react';
import './Person.css'
export const Person = (props) => {
    return (
        <div className='Person'>
            <p>
                User Name: {props.userName}
            </p>
            <p>
                Age: {props.age}
            </p>
        </div>
    );

}
