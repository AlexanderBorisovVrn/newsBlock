import { createSlice } from "@reduxjs/toolkit";


const displayParams = createSlice({
  name:'displayParams',
  initialState:{
    sortDate:false,
    headerNavVisibility:false
  },
  reducers:{
    dateSorted:(state,action)=>{
      state.sortDate=action.payload
    },
    headerNavVisibility:(state)=>{
      state.headerNavVisibility=!state.headerNavVisibility
    }
  }
})
const {dateSorted,headerNavVisibility} = displayParams.actions;
export const changeHeaderNavVisibility = (dispatch)=>{
dispatch(headerNavVisibility())
} 

export const sortByDate=(isSorted)=>dispatch=>{
  dispatch(dateSorted(!isSorted))
}


export default displayParams.reducer;