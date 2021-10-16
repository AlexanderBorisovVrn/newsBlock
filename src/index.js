import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import NewsContext from './components/news-context';
import ErrorBoundry from './components/error-boundry/';
import {NewsService,MockNewsService} from './sercvices/';
// const mockNewsService = new MockNewsService()

ReactDOM.render(
  <Provider store={store}>
  <ErrorBoundry>
    <NewsContext.Provider value={NewsService}>
      <Router>
        <App/>
      </Router>
    </NewsContext.Provider>
  </ErrorBoundry>
</Provider>, document.getElementById('root'))