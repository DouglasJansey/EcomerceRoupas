import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'USER-STATE',
      storage,
      whitelist: ['auth', 'cart', 'products', 'userInfo'],
    },
    reducers,
  );
  return persistedReducers;
};
