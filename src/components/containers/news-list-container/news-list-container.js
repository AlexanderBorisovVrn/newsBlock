import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsThunk} from './../../../reducers/fetchDataSlice';
import ArticleCard from '../../article-card';
import Loader from '../../loader';
import NewsContext from '../../news-context';
import NewsList from '../../news-list';

const NewsListContainer = () => {
  //создает запрос списка новостей передает
  const dispatch = useDispatch();
  const newsService = useContext(NewsContext);
  const {fetchData, query} = useSelector(state => state);

  const {getNews, getPeriodSearchParams} = newsService;
  const params = getPeriodSearchParams(query);

  useEffect(() => {
    fetchNewsThunk(getNews, params)(dispatch)
  }, [ getNews, dispatch,params]);

  const renderArticleCards = (article) => {
    const {id} = article;
    return <ArticleCard key={id} path={`/article/${id}`}>
      {article}
    </ArticleCard>
  }

  if (fetchData.loading) {
    return <NewsList>
      <Loader/>
    </NewsList>

  } else {
    return < NewsList > {
      fetchData
        .news
        .map(renderArticleCards)
    } </NewsList>
  }
}



export default NewsListContainer;