import React from 'react';
import './article.scss';
import {Link} from 'react-router-dom';

const Article = (props) => {
  const {id, title, txt, prevTxt, img}=props.article;
    return (
    <article className='article'>
      <Link to='/article'>
        <div className='article__inner'>
          <div className='article__img-wrap'>
            <img alt='' src={img} />
          </div>
          <h1 className='article__title'>{title}</h1>
          <p className='article__txt'>{prevTxt}</p>
        </div>
      </Link>
    </article>
  )
}

export default Article;
