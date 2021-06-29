const newsRequest = () => {
  return {type: 'NEWS_REQUESTED'}
};
const newsLoaded = (payload) => {
  return {type: 'NEWS_LOADED', payload}
};
const newsError = (payload) => {
  return {type: 'NEWS_ERROR', payload}
}
const articleLoaded = (payload) => {
  return {type: 'ARTICLE_LOADED', payload}
}

const onForm = () => {
  return {type: 'ON_FORM'}
}

const hideForm = () => {
  return {type: 'HIDE_FORM'}
}



const onPasswordVisible = ()=>{
  return {type:'ON_PASSWORD_VISIBLE'}
}

const onLoggedIn=()=>{
  return {type:'ON_LOGGED_IN'}
}

const fetchNews = (newsService,query, dispatch) => () => {
  dispatch(newsRequest())
    newsService
    .getNews(query)
    .then(newsList => {
      dispatch(newsLoaded(newsList))
    })
    .catch(err => dispatch(newsError(err)))
};
const fetchArticle = (newsService, id, dispatch) => () => {
  dispatch(newsRequest())
  newsService
    .getArticle(id)
    .then(article => {
      dispatch(articleLoaded(article))
    })
    .catch(err => dispatch(newsError(err)))
};

export {
  fetchNews,
  newsError,
  fetchArticle,
  onForm,
  hideForm,
  onPasswordVisible,
  onLoggedIn
}