import React from 'react';

export const withClass = (className, WrappedComponent) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}
