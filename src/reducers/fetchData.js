const fetchData = (state, action) => {
    if(state===undefined){
    return {
      loading: true,
      error: null,
      news: [],
      article: {}
    }
  }
   
  switch (action.type) {
    case 'NEWS_REQUESTED':
      return {
        loading: true,
        error: null,
        news: [],
        article: {}
      }
    case 'NEWS_LOADED':
      return state = {
        ...state,
        loading: false,
        news: action.payload
      };
    case 'NEWS_ERROR':
      return state = {
        loading: false,
        error: action.payload,
        news: []
      };
    case 'ARTICLE_LOADED':
      return {
        ...state,
        loading: false,
        article: action.payload
      }
    default:
      return state
  }
}

export default fetchData;