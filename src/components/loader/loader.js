import React from 'react';

const Loader = () => {

  return (
    <div className='loader-wrap'>
      <div className="loader">
        <div className="l_main">
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader;