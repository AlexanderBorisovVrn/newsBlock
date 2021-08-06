import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';

const Article = ({children}) => {
  const {title, urlToImage,content,author} = children;
  //принимает из article-container данные
  //отображает статью
  
  return (
    <article className='article'>
      <div className='wrap'>
        <div className='article__inner'>
        <h1 className='article__title'>{title}</h1>
        <p className='article__author'>{author}</p>
          <div className='article__img-wrap'>
            <img className='article__img' src={urlToImage} alt='' width='1200' height='500'/>
          </div>
          <div className='article__txt'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

Article.propTypes={
  title:PropTypes.string,
  description:PropTypes.string,
  urlToImage:PropTypes.string,
  id:PropTypes.number
}

export default Article;