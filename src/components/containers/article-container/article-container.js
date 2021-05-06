import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import {withNewsService} from '../../hoc'
import {fetchArticle} from '../../../actions/';
import Article from '../../article/';

const ArticleContainer = ({fetchArticle, article}) => {
//делает запрос через action creator fetchArticle 
//помещает статью в state, оттуда передает в Article
  useEffect(() => {
    fetchArticle()
  }, [fetchArticle]);

  if (!article) {
    return <Loader/>
  } else {
    return <Article article={article}/>
  }

}

const mapStateToProps = ({article}) => {

  return {article}
}
const mapDispatchToProps = (dispatch, {newsService, itemId}) => {
  return {
    fetchArticle: fetchArticle(newsService, itemId, dispatch)
  }
}
export default compose(withNewsService, connect(mapStateToProps, mapDispatchToProps))(ArticleContainer)