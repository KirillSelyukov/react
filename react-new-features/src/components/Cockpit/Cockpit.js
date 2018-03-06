import React from 'react'
import Radium from 'radium';

let Cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };

    if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'white'
        }
    }

    return (<div>
        <h1>Hi I'm React App</h1>
        <p>Push the Button</p>
        <button style={style} onClick={props.clicked}>Show Persons</button>
    </div>);

}
Cockpit = Radium(Cockpit);
export { Cockpit };