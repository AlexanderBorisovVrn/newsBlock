class NewsService {
  _url = `https://newsapi.org/v2/`;
  _apiKey = '138eac7e07bf49b7815747fa75effa14';

  getResourse = async(fetchParams) => {
    const url = this._url + fetchParams + '&apiKey=' + this._apiKey;
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error.Couldn't fetch ${this._newsApi}.Response status ${response.status}`)
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }

  }

  getPeriodSearchParams = (query) => {
    const {category, period, sortBy} = query;
    const str = `everything?q=${category}&from=${period[0]}&to=${period[1]}&sortBy=${sortBy}`;
    return str
  }

  getHeadlinesInCountry = (query) => {
    return `top-headlines?country=${query.country}`
  }

  getNews = async(params) => {
    const {articles} = await this.getResourse(params);
    return articles.map(article => {
      return this.trasnsformData(article)
    })
  }

  getTopHeadlines = async(params) => {
    const {articles} = await this.getResourse(params);
    return articles
  }

  trasnsformData = (data) => {
    const idGen = (data) => {
      //генерит id
    return data.title.toLowerCase().replace(/[ $%&:;,.]/gm,'-')
    }
    return {
      author: data.author,
      content: data.content,
      description: data.description,
      publishedAt: data.publishedAt,
      title: data.title,
      url: data.url,
      urlToImage: data.urlToImage,
      id: idGen(data)
    }
  }
}

export default new NewsService();