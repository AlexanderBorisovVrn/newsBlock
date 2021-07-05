export default class NewsService {
  _newsApi = `https://newsapi.org/v2/everything`;
  _apiKey = '138eac7e07bf49b7815747fa75effa14';

  getResourse = async(query) => {
    //параметры запроса query
    const {category, from, to, sortBy,qualify} =query;
    //запрос
    const response = await fetch(`https://newsapi.org/v2/${qualify}?q=${category}&from=${from}&to=${to}&sortBy=${sortBy}&apiKey=${this._apiKey}`);
    if (!response.ok) {
      throw new Error(`Error.Couldn't fetch ${this._newsApi}.Response status ${response.status}`)
    }
        return await response.json();
  }

  getNews = async(query) => {
    const {articles} = await this.getResourse(query);
    return articles
  }
}
