import React from 'react';
import './article-card.scss';
import {Link} from 'react-router-dom';


const ArticleCards = ({article}) => {
  //отображает превью статей списком
  const {title, description, urlToImage, id} = article;
  return (
    <article className='article-card'>
      <Link to={`/article/${id}`}>
        <div className='article-card__inner'>
          <div className='article-card__img-wrap'>
            <img alt='' src={urlToImage} className='article-card__img' width='400' height='200'/>
          </div>
          <h1 className='article-card__title'>{title||'zaebis'}</h1>
          <p className='article-card__txt'>{description}</p>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCards;
