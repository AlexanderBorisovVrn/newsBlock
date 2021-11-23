import React from 'react';
import {useSelector} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import Article from '../../article/';
import PropTypes from 'prop-types';


const ArticleContainer = ({itemId}) => {
  
  const {loading, news} = useSelector(state => state.fetchData);
  //item id from NewsArticlePage
  console.log(news)
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
  itemId:PropTypes.number
}
export default compose(ArticleContainer)