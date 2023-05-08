import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    it('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLogin: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
