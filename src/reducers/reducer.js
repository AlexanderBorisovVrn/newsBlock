import fetchData from './fetchingData';
import { combineReducers } from 'redux';

const reducer = combineReducers({
   data:fetchData
})

export default reducer;