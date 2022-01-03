import React, {useEffect, useContext, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNavVisibility} from '../../../reducers/displayParamsSlice'
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
  const {sortDate,isNavVisible}=displayParams;
  const {loading,news} = fetchData;

  const params = useMemo(()=>getPeriodSearchParams(query),[query]);
  useEffect(() => {
    if(isNavVisible){
      dispatch(setNavVisibility());
    }
   dispatch (fetchNewsThunk(getNews, params));
   }, [ getNews,params]);

  const renderArticleCards =(article,idx) => {
       return <ArticleCard key={article.id+idx}>
      {article}
    </ArticleCard>
  }

  if (loading) {
    return <Loader/>
  }
  //если пустой массив новостей
  if(news.length === 0 ){
    return <div
     style={{fontSize:'40px',marginTop:'3rem',marginLeft:'auto'}}
     >По запросу ничего не найдено</div>

  }   
  //отображает список новостей
  else {
    return < NewsList > {
      dateSort(news,'publishedAt',sortDate)
        .map(renderArticleCards)
    } </NewsList>
  }
}



export default NewsListContainer;