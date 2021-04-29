const newsRequest =()=>{return {type:'NEWS_REQUESTED'}};
const newsLoaded=(payload)=>{return {type:'NEWS_LOADED',payload}};

export {newsLoaded,newsRequest}