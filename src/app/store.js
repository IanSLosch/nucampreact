import { configureStore } from '@reduxjs/toolkit';
import campsitesReducer from 'campsitesSlice.js'

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
  },
});
