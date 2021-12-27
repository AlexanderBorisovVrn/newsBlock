import React from 'react';
import Autorization from '../../pages/autorization';
import AppRouter from '../appRouter/appRouter';
import Header from '../header';
import Footer from '../footer/footer'
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <AppRouter/> 
      {/* <Autorization/>
    <Footer/> */}
    </div>
  )
}

export default App;