import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
