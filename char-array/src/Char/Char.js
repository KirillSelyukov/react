import React from 'react';

export const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return <p onClick = {props.click} style={style}>{props.char}</p>;
}