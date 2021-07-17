import React from 'react';
import './news-page.scss';
import {NewsListContainer, HeadlinesContainer} from '../../components/containers';
import Params from '../../components/params/';

const NewsPage = () => {
  return (
    <section className='news'>
      <div className=' news__inner'>
        <aside>
          <HeadlinesContainer/>
        </aside>
        <NewsListContainer/>
        <Params/>
      </div>
    </section>
  )
}

export default NewsPage;