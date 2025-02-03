import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Créer le slice pour le compteur
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Exporter les actions
const { increment, decrement } = counterSlice.actions;

// Créer le store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

// Composant Counter
function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Current value: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

// Exporter le composant enveloppé dans le Provider
export default function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}