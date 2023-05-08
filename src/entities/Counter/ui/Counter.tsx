import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value">{counterValue}</h1>
            <button data-testid="increment-button" onClick={increment}>increment</button>
            <button data-testid="decrement-button" onClick={decrement}>decrement</button>
        </div>
    );
};
