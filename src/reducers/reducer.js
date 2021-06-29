import fetchData from './fetchData';
import login from './login';
import newsQuery from './newsQuery'
import { combineReducers } from 'redux';

const reducer = combineReducers({
    data:fetchData,
    login,
    query:newsQuery
  })

export default reducer;