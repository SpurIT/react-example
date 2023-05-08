import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import {
    StateSchema, ReduxStoreWithManager, ReducersList, ReducersListName, ThunkExtraArgument, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ReducersList,
    ReducersListName,
    ThunkExtraArgument,
    ThunkConfig,
};
