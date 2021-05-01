import React from 'react';
import errorImg from './404-error-3060993_1280.png';

const ErrorIndicator = () => {
  return (
    <div className='error'>
      <h1 className='error__title'>Sorry,something went terribly wrong!</h1>
      <div className='error__img-wrap'>
        <img className='error__img' alt='error' src={errorImg}/>
      </div>
    </div>
  )
}

export default ErrorIndicator;