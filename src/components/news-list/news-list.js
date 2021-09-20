import React from 'react';
import './news-list.scss';
import PropTypes from 'prop-types';


const NewsList = ({children}) => {
  
  return (
    <div className='news-list'>
      <div className='news-list__inner'>
        {children}
      </div>
    </div>
  );
}

NewsList.propTypes={
  children:PropTypes.node
}

export default NewsList;
