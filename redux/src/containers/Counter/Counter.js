import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={this.props.onDeleteResult}>{result.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAdd: () => dispatch({ type: 'ADD', val: 5 }),
        onSubstract: () => dispatch({ type: 'SUBSTRACT', val: 5 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: () => dispatch({ type: 'DELETE_RESULT' }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);