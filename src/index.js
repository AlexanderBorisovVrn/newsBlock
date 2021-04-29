import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import {NewsProvider} from './components/news-context';
import NewsService from './sercvices/';

const newsService = new NewsService();

ReactDOM.render(
  <Provider store={store}>
  <NewsProvider value={newsService}>
    <Router>
      <App/>
    </Router>
  </NewsProvider>
</Provider>, document.getElementById('root'))