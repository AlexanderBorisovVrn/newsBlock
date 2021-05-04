import React from 'react';
import './article-card.scss';
import {Link} from 'react-router-dom';


const ArticleCards = ({article}) => {
  //отображает превью статей  
  const {title, prevTxt, img,id}=article;
    let path = `/article/${id}`
      return (
    <article className='article-card'>
      <Link to={path}>
        <div className='article-card__inner'>
          <div className='article-card__img-wrap'>
            <img alt='' src={img} className='article-card__img' />
          </div>
          <h1 className='article-card__title'>{title}</h1>
          <p className='article-card__txt'>{prevTxt}</p>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCards;
