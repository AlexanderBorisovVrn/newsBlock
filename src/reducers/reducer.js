const initialState = {
  loading: true,
  news: [],
  error:null,
  isLoggedI:false,
  article:null
}

const reducer = (state = initialState, action) => {
  console.log(action.type);
  
  switch (action.type) {
    case 'NEWS_REQUESTED':
      return initialState
    case 'NEWS_LOADED':
      return state = {
        ...state,
        loading: false,
        news: action.payload
      };
      case 'NEWS_ERROR':
        return state={
          loading:false,
          error:action.payload,
          news:[],
        };
        case 'ARTICLE_LOADED':
          return{
            ...state,
            article:action.payload
          }
       
    default:
      return state;
  }
}

export default reducer;