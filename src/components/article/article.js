import React from 'react';
import './article.scss';

const Article = ({article}) => {
  const {title, img,content} = article;
  //принимает из article-container данные
  //отображает статью
  return (
    <article className='article'>
      <div className='wrap'>
        <div className='article__inner'>
          <div className='article__img-wrap'>
            <img className='article__img' src={img} alt=''/>
          </div>
          <h1 className='article__title'>{title}</h1>
          <div className='article__txt'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article;