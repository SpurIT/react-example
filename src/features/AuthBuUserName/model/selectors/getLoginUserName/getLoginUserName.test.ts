import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    it('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toBe('admin');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toBe('');
    });
});
