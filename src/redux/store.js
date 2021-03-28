import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import contactsReducer from './phonebook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: combineReducers({
    contacts: persistReducer(contactPersistConfig, contactsReducer),
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
