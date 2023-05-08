import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
    });
    test('counter with value title', () => {
        expect(screen.getByTestId('value')).toHaveTextContent('10');
        const incrementBtn = screen.getByTestId('increment-button');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });
    test('increment', () => {
        const incrementBtn = screen.getByTestId('increment-button');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });
    test('decrement', () => {
        const decrementBtn = screen.getByTestId('decrement-button');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value')).toHaveTextContent('9');
    });
});
