const newsRequest =()=>{return {type:'NEWS_REQUESTED'}};
const newsLoaded=(payload)=>{return {type:'NEWS_LOADED',payload}};
const newsError = (payload)=>{return {type:'NEWS_ERROR',payload}}



const fetchNews = (newsService,dispatch) =>()=>{
  dispatch(newsRequest())
  newsService
    .getNews()
    .then(newsList => {
    dispatch(newsLoaded(newsList))
    })
    .catch(err=>newsError(err))
};

export {fetchNews,newsError}