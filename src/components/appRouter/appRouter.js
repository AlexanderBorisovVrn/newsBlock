import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {NewsPage, NewsArticlePage, ProfilePage, Login} from '../../pages';

const AppRouter = () => {
  return false
    ? <Switch>
        <Route path='/' component={ProfilePage} exact/>
        <Route path='/:params' component={NewsPage} exact/>
        <Route path='/article/:id' component={NewsArticlePage}/>
        <Redirect to='/'/>
      </Switch>

    : <Switch>
      <Route path='/login' component={Login} exact/>
      <Redirect to='/login'/>
    </Switch>

}

export default AppRouter;
