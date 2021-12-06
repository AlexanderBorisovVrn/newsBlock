import React from 'react';
import Autorization from '../../pages/autorization';
import AppRouter from '../appRouter/appRouter';
import Header from '../header';
import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer'
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <NavBar/>
      {/* <AppRouter/> */}
      {/* <Autorization/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App;