import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import {withNewsService} from '../../hoc'
import {fetchArticle} from '../../../actions/';
import Article from '../../article/';

const ArticleContainer = ({newsService,itemId}) => {
  // делает запрос через action creator fetchArticle помещает статью в state,
  // оттуда передает в Article
  const dispatch = useDispatch();
  const {loading,article}=useSelector(state=>state.data);

  useEffect(() => {
    fetchArticle(newsService,itemId,dispatch)()
  }, [fetchArticle]);

  if (!loading) {
    return <Article article={article}/>
  } else {
    return <Loader/>
  }

}

export default compose(withNewsService)(ArticleContainer)