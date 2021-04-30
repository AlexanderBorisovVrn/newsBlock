const initialState = {
  loading: true,
  news: [],
  error:null
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
      };
      case 'NEWS_ERROR':
        return state={
          loading:false,
          error:action.payload,
          news:[]
        }
    default:
      return state;
  }
}

export default reducer;