import React from 'react';
import {withRouter} from 'react-router-dom';
import ArticleContainer from '../../components/containers/article-container';

const NewsArticlePage = ({match})=>{
  //передает id из роутера 
  return <ArticleContainer itemId={+match.params.idx}/>
}

export default withRouter(NewsArticlePage);
