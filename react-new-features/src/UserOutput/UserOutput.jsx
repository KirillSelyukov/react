import React, { Component } from 'react';

export const UserOutput = (props) => {

    const style1 = {
        paddinx: '2 px',
        border:'1px solid blue',
        margin:'auto',
        width:'200px'
    }
    return (
        <div style={style1}>
            <p>
                {props.userName}
            </p>
            <p>
                {props.userName}
            </p>
        </div>
    );

}
