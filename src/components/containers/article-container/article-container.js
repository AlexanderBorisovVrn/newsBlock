import React from 'react';
import {useSelector} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import Article from '../../article/';

const ArticleContainer = ({itemId}) => {
  const {loading,news}=useSelector(state=>state.fetchData);
 const idxArticle =news.findIndex(el=>el.id===itemId);
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

export default compose(ArticleContainer)