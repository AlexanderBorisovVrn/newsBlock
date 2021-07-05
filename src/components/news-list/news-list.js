import React from 'react';
import './news-list.scss'

const NewsList = ({children}) => {
  return (
    <div className='news-list'>
      {children}
    </div>
  );
}

export default NewsList;
