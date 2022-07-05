import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

var store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware, logger)))


sagaMiddleware.run(rootSaga);

export default store;
