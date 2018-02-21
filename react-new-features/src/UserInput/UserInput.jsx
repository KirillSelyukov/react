import React, { Component } from 'react';

export const UserInput = (props) => {

    return <input type='text' onChange={props.changed} value={props.username} />
}