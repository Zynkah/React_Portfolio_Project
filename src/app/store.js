import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { menuReducer } from '../features/menu/menusSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { maidsReducer } from '../features/maids/maidsSlice';
import { banquetsReducer } from '../features/banquets/banquetsSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    comments: commentsReducer,
    maids: maidsReducer,
    banquets: banquetsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
