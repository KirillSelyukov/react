import React from 'react';
import Chart from "../Chart/Chart";

const charts = (props) => {
    const getPoints = name => {
        const points = props.stations[name].points.map(point => (
            { name: point, value: point }
        ))
        return points;
    }

    return (
        props.names.map((name) => {
            return <Chart key={name} name={name} data={getPoints(name)} />
        })
    )
}

export default charts;