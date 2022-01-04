import React from 'react';
import { Login } from '../../pages';
import AppRouter from '../appRouter/appRouter';
import Header from '../header';
import Footer from '../footer/footer'
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <AppRouter/> 
      {/* <Login/>
    <Footer/> */}
    </div>
  )
}

export default App;