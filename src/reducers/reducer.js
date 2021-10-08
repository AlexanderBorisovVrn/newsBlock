import fetchData from './fetchDataSlice';
import login from './login';
import query from './querySlice';
import { combineReducers } from 'redux';
import displayParams from './displayParamsSlice';

const reducer = combineReducers({
    fetchData,
    login,
    query,
    displayParams
  })

export default reducer;