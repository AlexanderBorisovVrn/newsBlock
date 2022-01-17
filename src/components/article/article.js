import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './article.scss';
import CommentsContainer from '../containers/comments-container/commentsContainer'
import MyImage from '../UI/MyImage/MyImage';

const Article = ({children,id}) => {
  const {title, urlToImage, content, author} = children;
  //принимает из article-container данные отображает статью
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <article className='article'>
      <div className='article__inner'>
        <h1 className='article__title'>{title}</h1>
        <p className='article__author'>{author}</p>
        <div className='article__img-wrap'>
          <MyImage
            className='article__img'
            src={urlToImage}
            width='1200'
            height='500'/>
        </div>
        <div className='article__txt'>
          <p>{content}</p>
        </div>
        <CommentsContainer id={id}/>
      </div>
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
  id: PropTypes.number
}

export default Article;