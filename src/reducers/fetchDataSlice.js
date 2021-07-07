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
    newsRequested: (state) => {
      state.loading = true
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

export const fetchNews = (service, query) => dispatch => {
  dispatch(newsRequested());
  service
    .getNews(query)
    .then(newsList => dispatch(newsLoaded(newsList)))
}

export const fetchHeadlines = (service, params) => dispatch => {
  dispatch(newsRequested());
  service
    .getTopHeadlines(params)
    .then(headlines => dispatch(headlinesLoaded(headlines)))
}

export const {
  headlinesLoaded,
  newsRequested,
  newsLoaded,
  newsError
} = fetchData.actions;
export default fetchData.reducer;