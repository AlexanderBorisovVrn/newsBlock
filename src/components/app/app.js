import React from 'react';
import AppRouter from '../appRouter/appRouter';
import Header from '../header';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App;