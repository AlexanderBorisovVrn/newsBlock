import React from 'react';
import Header from '../header';
import './app.scss';
import Autorization from '../../pages/autorization';
import {Route, Switch, Redirect} from 'react-router-dom';
import {News, NewsArticlePage, ProfilePage} from '../../pages';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path='/news/' component={News} exact/>
        <Route
          path='/article/:idx'
          render={() => {
          return <NewsArticlePage/>
        }}/>
      </Switch>
      <Autorization/>
    </div>
  )
}

export default App;