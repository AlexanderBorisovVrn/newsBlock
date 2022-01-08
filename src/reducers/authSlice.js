import { createSlice } from '@reduxjs/toolkit'
import {newsError,loading} from './fetchDataSlice';
import { Users } from '../sercvices/authService';
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
    const response = await Users.getUsers();
    const checkUser = response.data.find(user=>{
     return user.username===username && user.password===password
    })
    if(checkUser){
      loading(true)
      localStorage.setItem('auth','true');
      localStorage.setItem('username',username);
      setUser(checkUser);
      setAuth(true);
      loading(false)
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
      setUser('');
      setAuth(false);
    } catch (error) {
    dispatch(newsError(error))
  }
}
export const { setUser,setAuth,setFormVisibility } = authSlice.actions
export default authSlice.reducer