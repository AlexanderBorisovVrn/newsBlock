import React from 'react';
import './article-card.scss';
import {Link} from 'react-router-dom';

const ArticleCards = (props) => {
  const {id, title, txt, prevTxt, img}=props.article;
    return (
    <article className='article-card'>
      <Link to='/article-card'>
        <div className='article-card__inner'>
          <div className='article-card__img-wrap'>
            <img alt='' src={img} />
          </div>
          <h1 className='article-card__title'>{title}</h1>
          <p className='article-card__txt'>{prevTxt}</p>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCards;
