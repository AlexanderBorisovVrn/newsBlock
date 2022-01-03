import React from 'react';
import './article-card.scss';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MyImage from '../UI/MyImage/MyImage';



const ArticleCard = ({children}) => {
  //отображает превью статей списком
  //данные из NewsListContainer
  
    const {title, description, urlToImage,id} = children;
  return (
    <article className='article-card'>
      <Link to={`/article/${id}`}>
        <div className='article-card__inner'>
          <div className='article-card__img-wrap'>
            <MyImage
              src={urlToImage}
              className='article-card__img'
              width='400'
              height='200'/>
          </div>
          <h1 className='article-card__title'>{title}</h1>
          <p className='article-card__txt'>{description}</p>
        </div>
      </Link>
    </article>
  )
}

ArticleCard.propTypes={
  title:PropTypes.string,
  description:PropTypes.string,
  urlToImage:PropTypes.string,
  id:PropTypes.number
}

export default ArticleCard;
