import React, { Component } from 'react';
import { connect } from "react-redux";

import {ADD, MINUS, INC, DEC, STORE_RESULT, DELETE_RESULT} from "../../store/actions";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onMinusFive}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store</button>
                <ul>
                    {this.props.res.map(item => (
                        <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: ADD }),
        onDecrement: () => dispatch({ type: MINUS }),
        onAddFive: () => dispatch({ type: INC, value: 5 }),
        onMinusFive: () => dispatch({ type: DEC, value: 5 }),
        onStoreResult: () => dispatch({ type: STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, resultELId: id })
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        res: state.results
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);