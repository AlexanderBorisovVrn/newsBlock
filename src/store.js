import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleWare from 'redux-thunk';
import reducer from './reducers/reducer';




const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunkMiddleWare)));


export default store;