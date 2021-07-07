import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../reducers/fetchDataSlice';
import TopHeadlines from '../../top-headlines';
import newsContext from '../../news-context';

const HeadlinesContainer = () => {
  //create request top headlines
  const dispatch = useDispatch();
  const {query,fetchData:{headlines}} = useSelector(state => state);
  const newsService = useContext(newsContext);
  useEffect(() => {
    Actions
      .fetchHeadlines(newsService, query)(dispatch)
 },[newsService,dispatch,query]);
 return(
   <ul>
      {
        headlines.map(txt=><TopHeadlines>{txt}</TopHeadlines>)
      }
   </ul>
  )

}

export default HeadlinesContainer;
