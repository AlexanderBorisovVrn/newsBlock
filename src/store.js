import reducer from './reducers/reducer';
import  setQuery from './reducers/querySlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer,
})


