import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Course extends Component {
    render() {
        const query = new URLSearchParams(this.props.location.search);
        return (
            <div>
                <h1>{query.get('title')}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);