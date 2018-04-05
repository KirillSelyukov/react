import React from 'react';
import Chart from "../Chart/Chart";

const charts = (props) => {
    return (
        props.names.map(name => {
            return <Chart
                key={name}
                clientKey={props.clientKey}
                name={name}
                data={props.stations[name].points}
                time={props.time}
                enabled={props.stations[name].enabled} />
        })
    )
}

export default charts;