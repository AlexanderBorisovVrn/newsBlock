import axios from 'axios';
import {crypto} from '../utils/crypto';

class NewsService {
  _url = `https://newsapi.org/v2/`;
  _commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
  _apiKey = '138eac7e07bf49b7815747fa75effa14';
  _initialNewsParams = {
    q: 'everything'
  }
  _getResourse = async(fetchParams) => {
    const url = this._url + fetchParams + '&apiKey=' + this._apiKey;
    try {
      const response = await fetch(url)
      if (response.status !== 200) {
        throw new Error(`Error.Couldn't fetch ${url}.Response status ${response.status}`)
      } else {
        return await response.json();
      }
    } catch (error) {
      throw new Error(error)
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
    const {articles} = await this._getResourse(params);
    return articles.map(article => {
      return this.trasnsformData(article)
    })
  }

  getTopHeadlines = async(params) => {
    const {articles} = await this._getResourse(params);
    return articles
  }

  getComments = async()=>{
    const response = await axios.get(this._commentsUrl);
    return response.data.map(comment=>{
     return this.trasnsformCommentsData(comment)
    });
  }

  trasnsformData = (data) => {
    return {
      author: data.author,
      content: data.content,
      description: data.description,
      publishedAt: data.publishedAt,
      title: data.title,
      url: data.url,
      urlToImage: data.urlToImage,
      id: crypto(data.title + data.url)
    }
  }

  trasnsformCommentsData = (data) => {
    return {
     userName:data.email,
     text:data.body,
     dateTime:'2018-12-17T03:24:00',
     id:data.id,
     postId:data.postId
    }
  }
}

export default new NewsService();