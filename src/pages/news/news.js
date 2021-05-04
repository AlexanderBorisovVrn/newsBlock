import React from 'react';
import './news.scss';
import {NewsListContainer} from '../../components/containers';

const News = () => {
  return (
    <section className='news'>
      <div className='wrap'>
        <div className='news__inner'>
          <NewsListContainer/>
        </div>
      </div>
    </section>
  )
}

export default News;