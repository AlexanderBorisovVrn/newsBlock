import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  category: 'all',
  from: '',
  to: '',
  sortBy: '',
  country: 'us',
  qualify: 'everything',
  sources:'',
}

export const setQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setDateFrom: (state, action) => {
      state.from = action.payload
    },
    setDateTo: (state, action) => {
      state.to = action.payload
    },
    setQualify: (state, action) => {
      state.qualify = action.payload
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
  setDateFrom,
  setDateTo,
  setQualify,
  setSources
} = setQuery.actions;
export default setQuery.reducer