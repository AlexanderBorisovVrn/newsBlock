import React from 'react';
import {useParams} from 'react-router-dom';
import ArticleContainer from '../../components/containers/article-container';

const NewsArticlePage = ()=>{
  //передает id из роутера 
 const {id}=useParams();
  return <ArticleContainer itemId={+id}/>
}

export default NewsArticlePage;
