import fetchData from './fetchDataSlice';
import login from './login';
import setQuery from './querySlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    fetchData,
    login,
    query:setQuery
  })

export default reducer;