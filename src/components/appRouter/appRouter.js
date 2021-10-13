import React from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route,Redirect} from 'react-router-dom';
import {NewsPage, NewsArticlePage, ProfilePage} from '../../pages';
import Autorization from '../../pages/autorization';
const AppRouter = () => {
const {isLogged}=  useSelector(state=>state.login)
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
