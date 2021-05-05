import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withNewsService} from '../../hoc'
import {fetchNews} from '../../../actions/';
import Article from '../../article/';

const ArticleContainer = ({news, itemId, fetchNews}) => {
  // получаем itemId из Url роутером ищем по нему статью в news передаем сатью в
  // Article
  const getArticleFromStore = () => {
    const articleIdx = news.findIndex(item => item.id === itemId);
    return <Article article={news[articleIdx]}/>
  }

  if (news.length===0) {
    console.log('news dont exist',news);
    fetchNews();
    return getArticleFromStore()
  } else {
    console.log('news exist',news);
    
    return getArticleFromStore()
  }

  //путь на основе индекса

}

const mapStateToProps = ({news}) => {
  return {news}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const {newsService} = ownProps;
  return {
    fetchNews: fetchNews(newsService, dispatch)
  }
}
export default compose(withNewsService, connect(mapStateToProps, mapDispatchToProps))(ArticleContainer)