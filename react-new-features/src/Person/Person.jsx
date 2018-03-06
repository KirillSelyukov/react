import React from 'react';
import './Person.css'


export const Person = (props) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.7) {
        throw new Error('Something went wrong!');
    }
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
