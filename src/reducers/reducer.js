import fetchData from './fetchData';
import login from './login';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    data:fetchData,
    login
  })

export default reducer;