import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })

    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }

        return this.props.children;
    }
}
