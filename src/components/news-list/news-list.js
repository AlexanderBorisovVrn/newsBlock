import React from 'react';
import './news-list.scss'

const NewsList = ({children}) => {
  return (
    <div className='news-list'>
      <div className='news-list__inner'>
        {children}
      </div>
    </div>
  );
}

export default NewsList;
