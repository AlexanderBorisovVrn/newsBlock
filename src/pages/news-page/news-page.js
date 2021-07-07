import React from 'react';
import './news-page.scss';
import {NewsListContainer,HeadlinesContainer} from '../../components/containers';

const News = () => {
  return (
    <section className='news'>
        <div className=' news__inner'>
          <aside>
            <HeadlinesContainer/>
          </aside>
          <NewsListContainer/>
        </div>
    </section>
  )
}

export default News;