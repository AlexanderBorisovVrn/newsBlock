import React from 'react';
import './news-page.scss';
import {NewsListContainer, HeadlinesContainer} from '../../components/containers';
import ParamsBlock from '../../components/paramsBlock/params-block';

const NewsPage = () => {
  return (
    <section className='news'>
      <div className=' news__inner'>
        <aside className='aside'>
          <HeadlinesContainer/>
        </aside>
        <NewsListContainer/>
        <ParamsBlock/>
      </div>
    </section>
  )
}

export default NewsPage;