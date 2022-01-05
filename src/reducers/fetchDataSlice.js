import {createSlice} from "@reduxjs/toolkit";

export const fetchData = createSlice({
  name: 'fetchData',
  initialState: {
    loading: true,
    error: null,
    news: [],
    headlines: [],
    article: {}
  },
  reducers: {
    loading: (state,action) => {
      state.loading = action.payload
    },
    headlinesLoaded: (state, action) => {
      state.headlines = action.payload;
      state.loading = false;
    },
    newsLoaded: (state, action) => {
      state.news = action.payload;
      state.loading = false;
    },
    newsError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const fetchNewsThunk = (fetchData, params) => dispatch => {
  dispatch(loading(true));
  fetchData(params).then(newsList => dispatch(newsLoaded(newsList)))
}

export const fetchHeadlines = (fetchData, params) => dispatch => {
  dispatch(loading(true));
  fetchData(params)
    .then(headlines => dispatch(headlinesLoaded(headlines)))
}

export const {
  headlinesLoaded,
  loading,
  newsLoaded,
  newsError
} = fetchData.actions;
export default fetchData.reducer;