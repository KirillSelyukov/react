
import axios from 'axios';
let state;
let lastCallTime = null;

initialize();

function initialize(endpoint) {
    state = axios.get('http://localhost:8080/api/v1/init').catch(console.log);
}

function getDelta(name) {
    return state.then(({ data }) => {
        const time = lastCallTime == null ? data.time : lastCallTime;
        return axios.get(`http://localhost:8080/api/v1/client/${data.clientKey}/delta/${name}/since/${time}`);
    });
}

function trackError(error){
    console.log(err)
}

export function mergeDelta(points, delta) {
    return [...points, ...delta].slice(delta.length);
}

export function subscribeOnStationDelta(name, callback) {
    return setInterval(() => {
        getDelta(name).then(({ data }) => {
            if (!data.error) {
                lastCallTime = data.time;
                callback(data);
            }
        },trackError)
    }, 100);
}

export function unsubscribeOnStationDelta(number) {
    clearInterval(number);
}

export function getStations() {
    return state.then(({ data }) => {
        return Object.keys(data.stations);
    });
}

export function getStationInitialData(name) {
    return state.then(({ data }) => {
        return { points: data.stations[name].points, enabled: data.stations[name].enabled };
    });
}


