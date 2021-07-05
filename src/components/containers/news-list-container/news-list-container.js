import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './../../../reducers/fetchDataSlice';
import ArticleCard from '../../article-card-prew';
import Loader from '../../loader';
import NewsContext from '../../news-context';
import NewsList from '../../news-list';

const NewsListContainer = () => {
  //создает запрос списка новостей передает ответ в ArticleCard
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

  function getId() {
    return Math.floor(Math.random() * 198654) + Math.random() * 1998543
  }
  if (loading) {
    return <Loader/>
  } else {
    return (
      <NewsList>
        {news.map(article => {
          const id = getId();
          return <ArticleCard article={article} key={id} path={`/article/${id}`}/>
        })
}
      </NewsList>
    )
  }
}

export default NewsListContainer;