import React, { Component } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class Chart extends Component {
    state = {
        data: this.props.data,
        name: this.props.name,
        time: this.props.time,
    }

    componentDidMount() {
        this.getDelta(this.state.name);
    }

    getDelta = (name) => {
        setInterval(() => {
            var time = null;
            const req = axios.get(`http://localhost:8080/api/v1/client/${this.props.clientKey}/delta/${name}/since/${this.state.time}`);
            req.then(res => {

                if (!res.data.error && res.data.delta.length > 0) {
                    time = res.data.time;
                    let newPoints = [...this.state.data, ...res.data.delta];
                    this.setState({ time: time, data: newPoints.slice(-100), enabled: res.data.enabled })
                }
            }, err => {
                console.log(err);
            });
        }, 4000)
    }
    getPoints = newPoints => {
        return newPoints.map(point => (
            { name: point, value: point }
        ));
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                {this.state.enabled ? <p style={{ color: 'green' }}>ONLINE</p> : <p style={{ color: 'red' }}>OFFLINE</p>}
                <LineChart width={400} height={200} data={this.getPoints(this.state.data)}>
                    <XAxis />
                    <YAxis />
                    <Line type="monotone" stroke="#8884d8" dataKey='value' dot={false} />
                </LineChart></div >
        )
    }
}

export default Chart