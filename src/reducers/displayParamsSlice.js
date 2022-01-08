import { createSlice } from "@reduxjs/toolkit";


const displayParams = createSlice({
  name:'displayParams',
  initialState:{
    sortDate:false,
    isNavVisible:false
  },
  reducers:{
    dateSorted:(state,action)=>{
      state.sortDate=action.payload
    },
    setNavVisibility:(state,action)=>{
      state.isNavVisible=action.payload
    }
  }
})
export const {dateSorted,setNavVisibility} = displayParams.actions;

 

export const sortByDate=(isSorted)=>dispatch=>{
  dispatch(dateSorted(!isSorted))
}


export default displayParams.reducer;