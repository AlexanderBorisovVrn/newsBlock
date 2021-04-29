const initialState = {
  loading: true,
  news: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_REQUESTED':
      return state;
    case 'NEWS_LOADED':
      return state = {
        loading: false,
        news: action.payload
      }
    default:
      return state;
  }
}

export default reducer;