import axios from 'axios';
import { loginByUserName } from 'features/AuthBuUserName/model/services/loginByUserName/loginByUserName';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

// @ts-ignore
const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName.test', () => {
    it('success login', async () => {
        const userValue = {
            id: '1',
            username: 'admin',
            password: '123',
        };
        mockedAxios.post.mockResolvedValue(Promise.resolve({
            data: userValue,
        }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: 'admin',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    it('login with error', async () => {
        mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: 'admin',
            password: '123',
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
