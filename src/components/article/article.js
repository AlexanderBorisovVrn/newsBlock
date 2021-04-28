import React from 'react';
import './article.scss';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <article className='article'>
      <Link to='/article'>
      <div className='article__inner'>
        <div className='article__img-wrap'>
          <img alt='' src='https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'/>
        </div>
        <h1 className='article__title'>Lorem ipsum dolor sit amet</h1>
        <p className='article__txt'>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vivamus ullamcorper tristique tortor at malesuada. Nunc volutpat, neque
          quis auctor euismod, velit turpis pulvinar urna, ut pharetra ante sapien at
          justo. Cras finibus velit sed tristique tincidunt. Cras fermentum est magna,
          quis lobortis nulla bibendum eget. 
        </p>
      </div>
      </Link>

    </article>
  )
}

export default Article;
