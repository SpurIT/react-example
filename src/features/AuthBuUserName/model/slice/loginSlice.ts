import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLogin: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLogin = true;
                state.error = undefined;
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLogin = false;
                state.username = action.payload.username;
                state.password = action.payload.password;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLogin = false;
                state.error = action.payload;
            });
    },
});
export const loginActions = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
