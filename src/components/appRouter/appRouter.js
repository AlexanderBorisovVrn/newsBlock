import React from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {NewsPage, NewsArticlePage, ProfilePage} from '../../pages';
import Autorization from '../../pages/autorization';
const AppRouter = () => {
const {isLogged}=  useSelector(state=>state.login)
  return isLogged
    ? <Switch>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path='/:params' component={NewsPage} exact/>
        <Route path='/article/:id' component={NewsArticlePage}/>
      </Switch>

    : <Autorization/>

}

export default AppRouter;
