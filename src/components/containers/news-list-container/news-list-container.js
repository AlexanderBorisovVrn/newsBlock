import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsThunk} from './../../../reducers/fetchDataSlice';
import ArticleCard from '../../article-card';
import Loader from '../../loader';
import { dateSort } from '../../../utils/date-sort';
import NewsContext from '../../news-context';
import NewsList from '../../news-list';

const NewsListContainer = () => {
  //создает запрос списка новостей передает
  const dispatch = useDispatch();
  const newsService = useContext(NewsContext);
  const {fetchData, query,displayParams} = useSelector(state => state);
  const {getNews, getPeriodSearchParams} = newsService;
  const {sortDate}=displayParams;
  
  const params = getPeriodSearchParams(query);
  useEffect(() => {
    fetchNewsThunk(getNews, params)(dispatch)
  }, [ getNews, dispatch,params]);

  const renderArticleCards =(article) => {
       return <ArticleCard key={article.id} path={`/article/${article.id}`}>
      {article}
    </ArticleCard>
  }

  // если в стутсе загрузки
  if (fetchData.loading) {
    return <Loader/>
  }
  //если пустой массив новостей
  if(fetchData.news.length === 0 ){
    return <div
     style={{fontSize:'40px',marginTop:'3rem',marginLeft:'auto'}}
     >По запросу ничего не найдено</div>

  }   
  //отображает список новостей
  else {
    return < NewsList > {
      dateSort(fetchData.news,'publishedAt',sortDate)
      .map(renderArticleCards)
    } </NewsList>
  }
}



export default NewsListContainer;