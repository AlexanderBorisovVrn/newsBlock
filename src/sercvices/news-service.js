export default class NewsService {
  _newsApi = `https://newsapi.org/v2/`;
  _apiKey = '138eac7e07bf49b7815747fa75effa14';

  getUrl = (api, fetchParams) => {
    console.log(api + fetchParams);
    return api + fetchParams
  }

  getResourse = async(fetchParams) => {
     const response = await fetch(this.getUrl(this._newsApi,fetchParams))
    if (!response.ok) {
      throw new Error(`Error.Couldn't fetch ${this._newsApi}.Response status ${response.status}`)
    }
    return await response.json();
  }

  getNews = async(query) => {
   //параметры запроса query
    const {category, from, to, sortBy, qualify,country} = query;
    const fetchParams = `${qualify}?q=${category}&from=${from}&coutry=${country}&to=${to}&sortBy=${sortBy}&apiKey=${this._apiKey}`
    const {articles} = await this.getResourse(fetchParams);
    return articles
  }

  getTopHeadlines = async(params) => {
    const fetchParams = `top-headlines`
    const {articles} = await this.getResourse(params);
    return articles
  }
}
