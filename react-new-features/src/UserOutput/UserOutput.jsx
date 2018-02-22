import React, { Component } from 'react';

export const UserOutput = (props) => {

    const style = {
        paddinx: '2 px',
        border:'1px solid blue',
        margin:'auto',
        width:'200px'
    }
    return (
        <div style={style}>
            <p>
                User Name: {props.userName}
            </p>
            <p>
                Age: {props.age}
            </p>
        </div>
    );

}
