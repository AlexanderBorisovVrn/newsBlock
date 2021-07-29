import {createSlice} from "@reduxjs/toolkit";
import {transformDate} from '../components/calendar/calendar';

const today = transformDate(new Date()) //today format ISO

const initialState = {
  category: 'latest',
  period:[today,today],
  sortBy: 'publishedAt',
  country: 'ru',
  sources:'',
}



export const setQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setPeriod: (state, action) => {
      state.period = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setSources: (state, action) => {
      state.sources = action.payload
    }
  }
})



export const {
  setCategory,
  setPeriod,
  setQualify,
  setSources,
  setCountry
} = setQuery.actions;
export default setQuery.reducer