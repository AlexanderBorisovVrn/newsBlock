import React from 'react';
import Header from '../header';
import './app.scss';
import Autorization from '../../pages/autorization';
import {Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
  return (
      <div className='app'>
        <Header/>
        <Switch>

        </Switch>
        <Autorization/>
      </div>
  )
}

export default App;