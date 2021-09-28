import React from 'react';
import Header from '../header';
import './app.scss';
import Autorization from '../../pages/autorization';
import {Route, Switch} from 'react-router-dom';
import {NewsPage, NewsArticlePage, ProfilePage} from '../../pages';


const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path='/:params' component={NewsPage} exact/>
        <Route
          path='/article/:id'
          component={NewsArticlePage}/>
      </Switch>
      <Autorization/>
    </div>
  )
}

export default App;