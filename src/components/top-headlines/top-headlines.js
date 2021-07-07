import React from 'react';
import './top-headlines.scss';

const TopHeadlines = ({children}) => {
  const regExp = /\d{2}:\d{2}:\d{2}/;
  const date = children
    .publishedAt
    .match(regExp);
  return (
    <div className='top-headlines'>
      <p className='top-headlines__txt'>
        {children.title}
      </p>
      <span>{date}</span>
    </div>

  );
}

export default TopHeadlines;
