import React, { useRef,useContext } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import Article from '../../article/';
import PropTypes from 'prop-types';
import NewsContext from '../../news-context';

const ArticleContainer = ({itemId}) => {
  const {getNews} = useContext(NewsContext);
  const dispatch = useDispatch();
  const {loading, news} = useSelector(state => state.fetchData);
  
if(news.length===0){

}

  //item id from NewsArticlePage
  const idxArticle = news.findIndex(el => el.id === itemId);
  if (!loading) {
    return <div>
      <Article>
        {news[idxArticle]}
      </Article>
    </div>
  } else {
    return <Loader/>
  }
}
ArticleContainer.propTypes={
  loading:PropTypes.bool,
  news:PropTypes.arrayOf(PropTypes.object),
  itemId:PropTypes.string
}
export default compose(ArticleContainer)