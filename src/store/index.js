import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinereducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinereducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
