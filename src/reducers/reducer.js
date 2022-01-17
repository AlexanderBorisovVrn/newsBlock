import fetchData from './fetchDataSlice';
import authSlice from './authSlice';
import query from './querySlice';
import commentsSlice from './commentsSlice';
import { combineReducers } from 'redux';
import displayParams from './displayParamsSlice';

const reducer = combineReducers({
    fetchData,
    authSlice,
    query,
    displayParams,
    commentsSlice
  })

export default reducer;