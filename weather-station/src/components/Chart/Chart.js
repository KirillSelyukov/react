import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const chart = (props) => {
    return (
        <div>
        <p>Delta</p>
        <LineChart width={400} height={400} data={props.data}>
            <XAxis />
            <YAxis />
            <Line type="monotone" stroke="#8884d8" dataKey='value' dot={false} />
        </LineChart></div >
    )
}
export default chart