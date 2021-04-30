import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import reducer from './reducers/reducer';




const store = createStore(reducer,applyMiddleware(thunkMiddleWare));


export default store;