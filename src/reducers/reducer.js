import fetchData from './fetchData';
import login from './login';
import setQuery from './querySlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    data:fetchData,
    login,
    query:setQuery
  })

export default reducer;