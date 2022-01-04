import { createSlice } from '@reduxjs/toolkit'

const initialState = { user:{userName:'',password:''} }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state,action) {
      state.user = action.payload
    },
    logOut(state) {
      state.value--
    },
    
  },
})

export const { logIn,logOut } = authSlice.actions
export default authSlice.reducer