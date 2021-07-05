import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  category:'all',
  from:'',
  to:'',
  sortBy:'',
  qualify:'everything'
}

export const setQuery = createSlice({
  name:'query',
  initialState,
  reducers:{
    setCategory:(state,action)=>{
      state.category=action.payload
    },
    setDateFrom:(state,action)=>{
      state.from = action.payload
    },
    setDateTo:(state,action)=>{
      state.to = action.payload
    },
    setQualify:(state,action)=>{
      state.qualify = action.payload
    }
  }
})

export   const {setCategory,setDateFrom,setDateTo,setQualify}=setQuery.actions;
export default setQuery.reducer