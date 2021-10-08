import { createSlice } from "@reduxjs/toolkit";


const displayParams = createSlice({
  name:'displayParams',
  initialState:{
    sortDate:false
  },
  reducers:{
    dateSorted:(state,action)=>{
      state.sortDate=action.payload
    }
  }
})
const {dateSorted} = displayParams.actions;


export const sortByDate=(isSorted)=>dispatch=>{
  dispatch(dateSorted(!isSorted))
}


export default displayParams.reducer;