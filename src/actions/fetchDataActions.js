const NEWS_REQUESTED = 'NEWS_REQUESTED';
const NEWS_LOADED = 'NEWS_LOADED';
const NEWS_ERROR = 'NEWS_ERROR';
const ARTICLE_LOADED = 'ARTICLE_LOADED';
const CHANGE_CATEGORY='CHANGE_CATEGORY';

const newsRequest = () => {
  return {type: NEWS_REQUESTED}
};
const newsLoaded = (payload) => {
  return {type: NEWS_LOADED, payload}
};
const newsError = (payload) => {
  return {type: NEWS_ERROR, payload}
}
const articleLoaded = (payload) => {
  return {type: ARTICLE_LOADED, payload}
}


const fetchNews = (newsService, query, dispatch) => () => {
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

export {fetchNews,fetchArticle}