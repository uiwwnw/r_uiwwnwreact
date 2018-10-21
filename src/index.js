import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createStore } from 'redux';
// import App from './components/App';

/*
 * Action
 */

function increase(type, diff) {
    return {
        type: type,
        addBy: diff
    };
}

/*
 * Reducer
 */
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        case 'DESCREMENT':
            return Object.assign({}, state, {
                value: state.value - action.addBy
            });
        default:
            return state;
    }
}

/*
 * Store
 */
const store = createStore(counterReducer);


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const Contents = styled.div`
            color: red;
            font-size: 20px;
        `;

        return (
            <div>
                <h1
                    onClick={ this.onClick1.bind(this) }
                > {this.props.store.getState().value} </h1>
                <h1
                    onClick={ this.onClick2.bind(this) }
                > {this.props.store.getState().value} </h1>
                <Contents>dddd</Contents>
            </div>
        )
    }

    onClick1() {
        this.props.store.dispatch(increase('INCREMENT', 1));
    }

    onClick2() {
        this.props.store.dispatch(increase('DESCREMENT', 2));
    }
}


const render = () => {

    const appElement = document.getElementById('root');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();

