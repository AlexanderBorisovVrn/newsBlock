import React from 'react';
import './loader.scss';

const Loader = () => {
  return <div className='loader__wrap'>
    <div class="ring">LOADING
      <span className='cont'></span>
    </div>
  </div>

}

export default Loader;