import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthBuUserName';
import {
    AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StoreSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StoreSchemaKeys, reducer: Reducer) => void;
    remove: (key: StoreSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

export type ReducersList = {
    [name in StoreSchemaKeys]?: Reducer
}

export type ReducersListName = [StoreSchemaKeys, Reducer]

export interface ThunkExtraArgument {
    api: AxiosInstance
    navigation: (to: string, option?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArgument
}
