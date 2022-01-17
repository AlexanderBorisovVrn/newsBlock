import { createSlice } from "@reduxjs/toolkit";


const comments = createSlice({
  name:'comments',
  initialState:{
    comments:[],
    loading:false,
    error:null
  },
  reducers:{
    commentsLoaded:(state,action)=>{
      state.comments = action.payload
    }
  }
})
export const {commentsLoaded} = comments.actions;



export default comments.reducer;