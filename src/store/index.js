import { createStore } from 'redux';
import combinereducer from './modules/rootReducer';

const store = createStore(combinereducer);

export default store;
