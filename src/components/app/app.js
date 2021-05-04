import React from 'react';
import Header from '../header';
import './app.scss';
import {ArticleContainer} from '../containers';
import Autorization from '../../pages/autorization';
import {Route, Switch, Redirect} from 'react-router-dom';
import {News} from '../../pages';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/news' component={News}/>
        <Route
          path='/article/:idx'
          render={({match}) => {
          return <ArticleContainer itemId={+match.params.idx}/>
        }}/>
      </Switch>
      <Autorization/>
    </div>
  )
}

export default App;