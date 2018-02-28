import React from 'react';
import { Char } from '../Char';

export const Chars = ({ input, click }) => {
    const charsClick = (index) => {
        click(index);
    }

    return [...input].map((element, index) => {
        return <Char key={index} char={element} click={() => charsClick(index)} />
    });
}