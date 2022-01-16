import {createSlice} from '@reduxjs/toolkit'
import {newsError} from './fetchDataSlice';
import {Users} from '../sercvices/authService';
import {setNavVisibility} from './displayParamsSlice';

const initialState = {
  isAuth: false,
  user: null,
  isFormVisible: false,
  isAuthPanelVisible: false,
  isButtonLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setAuthPanelVisibility(state, action) {
      state.isAuthPanelVisible = action.payload
    },
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setFormVisibility(state, action) {
      state.isFormVisible = action.payload
    },
    setButtonLoading(state, action) {
      state.isButtonLoading = action.payload
    }
  }
})

export const logIn = (username, password) => async(dispatch) => {
  dispatch(setButtonLoading(true))
  try {
    const response = await Users.getUsers();
    const user = response
      .data
      .find(user => {
        return user.username === username && user.password === password
      })
    if (user) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username);
      dispatch(setUser(username));
      dispatch(setAuth(true))
      dispatch(setFormVisibility(false))
      dispatch(setAuthPanelVisibility(false))
      dispatch(setNavVisibility(false))
    } else {
      dispatch(newsError('Неправильное имя пользователя или пароль'))
    }
  } catch (error) {
    dispatch(newsError(error))
  }
  dispatch(setButtonLoading(false))
}
export const logOut = () => async(dispatch) => {
  try {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(setUser(''));
    dispatch(setAuth(false));
  } catch (error) {
    dispatch(newsError(error))
  }
}
export const {
  setUser,
  setAuth,
  setFormVisibility,
  setAuthPanelVisibility,
  setButtonLoading
} = authSlice.actions
export default authSlice.reducer