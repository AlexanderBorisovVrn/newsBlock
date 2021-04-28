import React from 'react';
import './news.scss';
import Article from '../../components/article'

const News = () => {
  return (
    <section className='news'>
      <div className='wrap'>
        <div className='news__inner'>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>
    </section>
  )
}

export default News;