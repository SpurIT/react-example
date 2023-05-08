import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    it('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
                password: '123',
                isLogin: true,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.login);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toBeUndefined();
    });
});
