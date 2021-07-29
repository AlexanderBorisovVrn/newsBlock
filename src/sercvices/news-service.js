class NewsService {
  _url = `https://newsapi.org/v2/`;
  _apiKey = '138eac7e07bf49b7815747fa75effa14';

  getResourse = async(fetchParams) => {
    const url = this._url + fetchParams + '&apiKey=' + this._apiKey;

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error.Couldn't fetch ${this._newsApi}.Response status ${response.status}`)
    }
    return await response.json();
  }

  getQSearchParams = (query) => {
    return `everything?q=${query.category}}`
  }

  getPeriodSearchParams = (query) => {
    const {category, period, sortBy} = query;
    return `everything?q=${category}&from=${period[0]}&to=${period[1]}&sortBy=${sortBy}`
  }

  getHeadlinesInCountry = (query) => {
    return `top-headlines?country=${query.country}`
  }

  getNews = async(params) => {
    const {articles} = await this.getResourse(params);
    return articles.map(article => this.trasnsformData(article))
  }

  getTopHeadlines = async(params) => {
    const {articles} = await this.getResourse(params);
    return articles
  }

  trasnsformData = (data) => {
    const idGen = () => {
      //генерит id
      return Math.floor(Math.random() * 198654) + Math.ceil(Math.random() * 1998543)
    }
    return {
      author: data.author,
      content: data.content,
      description: data.description,
      publishedAt: data.publishedAt,
      title: data.title,
      url: data.url,
      urlToImage: data.urlToImage,
      id: idGen()
    }
  }
}

export default new NewsService();