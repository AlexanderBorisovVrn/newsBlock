import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './../../../reducers/fetchDataSlice';
import ArticleCard from '../../article-card-prew';
import Loader from '../../loader';
import NewsContext from '../../news-context';
import NewsList from '../../news-list';

const NewsListContainer = () => {
  //создает запрос списка новостей передает
  const dispatch = useDispatch();
  const newsService = useContext(NewsContext);
  const {
    fetchData: {
      loading,
      news
    },
    query //параметры запроса
  } = useSelector(state => state);
  useEffect(() => {
    Actions.fetchNews(newsService, query)(dispatch)
  }, [newsService, query, dispatch]);

  if (loading) {
    return <NewsList>
       <Loader/>
    </NewsList>
       
  } else {
    return (
    // отображает 
      <NewsList>
        {news.map(article => {
          const {id}=article;
          return <ArticleCard  key={id} path={`/article/${id}`}>
           {article}
          </ArticleCard>
        })
}
      </NewsList>
    )
  }
}

export default NewsListContainer;