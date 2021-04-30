const initialState = {
  loading: true,
  news: []
}

const reducer = (state = initialState, action) => {
  console.log(action.type);
  
  switch (action.type) {
    case 'NEWS_REQUESTED':
      return initialState
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