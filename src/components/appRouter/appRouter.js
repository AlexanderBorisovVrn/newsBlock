import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {NewsPage, NewsArticlePage, ProfilePage} from '../../pages';

const AppRouter = () => {
  return true
    ? <Switch>
        <Route path='/' component={ProfilePage} exact/>
        <Route path='/:params' component={NewsPage} exact/>
        <Route path='/article/:id' component={NewsArticlePage}/>
        <Redirect to={'/'}/>
      </Switch>

    : <ProfilePage/>

}

export default AppRouter;
