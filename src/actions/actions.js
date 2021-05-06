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

const fetchNews = (newsService, dispatch) => () => {
  dispatch(newsRequest())
  newsService
    .getNews()
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

export {fetchNews, newsError, fetchArticle}