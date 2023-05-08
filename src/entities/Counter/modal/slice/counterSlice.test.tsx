import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    it('should return counter increment value', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });
    it('should return counter decrement value', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });
});
