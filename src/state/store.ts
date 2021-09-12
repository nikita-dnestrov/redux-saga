import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMidlleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from './users/users.reducer';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({ state: usersReducer });
const sagaMiddleware = createSagaMidlleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
