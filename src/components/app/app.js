import React from 'react';
import Header from '../header';
import './app.scss';
import News from '../../pages/news/news';
import Autorization from '../../pages/autorization';
import {Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/news' component={News}/>
        <Route
          path='/article'
          render={()=><p>Article</p>}
          exact/>
      </Switch>
    </div>
  )
}

export default App;