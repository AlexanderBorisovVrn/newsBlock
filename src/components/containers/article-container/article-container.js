import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withNewsService} from '../../hoc'
import Article from '../../article/';


const ArticleContainer = ({news,itemId})=>{
  //получаем itemId из Url роутером
  //ищем по нему статью в news
  //передаем сатью в Article

  const articleIdx =news.findIndex(item=>item.id===itemId);
    return <Article article={news[articleIdx]}/>
}

const mapStateToProps = ({news})=>{
  return {news}
}



export default compose(
  withNewsService,
  connect(mapStateToProps)
)(ArticleContainer)