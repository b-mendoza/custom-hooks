import { useState } from 'react';

const useCounter = (initialState = 0, factor = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => setCounter(counter => counter + factor);
    const decrement = () => setCounter(counter => counter - factor);
    const reset = () => setCounter(initialState);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};

export default useCounter;
