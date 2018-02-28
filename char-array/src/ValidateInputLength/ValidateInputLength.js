import React from 'react';

export const ValidateInputLength = (props) => {
    if (props.length < 5) {
        return <p>Text too short</p>
    }
    return <p>Good text length</p>
}
