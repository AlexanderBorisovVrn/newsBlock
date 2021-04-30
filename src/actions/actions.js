const newsRequest =()=>{return {type:'NEWS_REQUESTED'}};
const newsLoaded=(payload)=>{return {type:'NEWS_LOADED',payload}};
const newsError = ()=>{return {type:'NEWS_ERROR'}}



const fetchNews = (newsService,dispatch) =>()=>{
  dispatch(newsRequest())
  newsService
    .getNews()
    .then(newsList => {
    dispatch(newsLoaded(newsList))
    })
};

export {fetchNews,newsError}