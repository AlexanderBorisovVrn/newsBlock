import React from 'react';
import './news-page.scss';
import {NewsListContainer, HeadlinesContainer} from '../../components/containers';

const NewsPage = () => {
  return (
    <section className='news'>
      <div className=' news__inner'>
        <aside className='aside'>
          <HeadlinesContainer/>
        </aside>
        <NewsListContainer/>
      </div>
    </section>
  )
}

export default NewsPage;