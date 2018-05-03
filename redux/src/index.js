import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReduder = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = (state) => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE] Dispatching', action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state', store.getState())
            return result;
        }
    }
}

const store = createStore(rootReduder, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
