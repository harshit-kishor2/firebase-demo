import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import rootReducers from './redux';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: rootReducers,
});

export const ReduxProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
