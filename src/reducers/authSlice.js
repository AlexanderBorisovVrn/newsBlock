import { createSlice } from '@reduxjs/toolkit'
import {newsError,loading} from './fetchDataSlice';
import { Users } from '../sercvices/authService';
import { setNavVisibility } from './displayParamsSlice';

const initialState = { 
  isAuth:false,
  user:null,
  isFormVisible:false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state,action) {
      state.user = action.payload
    },
    setAuth(state,action) {
      state.isAuth = action.payload;
    },
    setFormVisibility(state,action){
      state.isFormVisible=action.payload
    }
  },
})

export const logIn =(username,password)=>async(dispatch)=>{
  try {
    dispatch(loading(true))
    const response = await Users.getUsers();
    const user = response.data.find(user=>{
     return user.username===username && user.password===password
    })
    if(user){
      localStorage.setItem('auth','true');
      localStorage.setItem('username',username);
      dispatch(setUser(user));
      dispatch(setAuth(true))
      dispatch(setFormVisibility(false))
      dispatch(setNavVisibility(false))
      dispatch(loading(false))
    }else{
      dispatch(newsError('Неправильное имя пользователя или пароль'))
    }
  } catch (error) {
    dispatch(newsError(error))
  }
}
export const logOut =(username)=>async(dispatch)=>{
  try {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      dispatch(setUser(''));
      dispatch(setAuth(false));
    } catch (error) {
    dispatch(newsError(error))
  }
}
export const { setUser,setAuth,setFormVisibility } = authSlice.actions
export default authSlice.reducer