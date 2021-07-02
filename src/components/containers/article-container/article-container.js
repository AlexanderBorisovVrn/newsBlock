import React, {useContext, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../loader/';
import {fetchArticle} from '../../../actions/';
import Article from '../../article/';
import NewsContext from '../../news-context/news-context';

const ArticleContainer = ({itemId}) => {
  // делает запрос через action creator fetchArticle помещает статью в state,
  // оттуда передает в Article
  const dispatch = useDispatch();
  const newsService = useContext(NewsContext);
  const {loading,article}=useSelector(state=>state.data);

  useEffect(() => {
    fetchArticle(newsService,itemId,dispatch)()
  }, [newsService,itemId,dispatch]);

  if (!loading) {
    return <Article article={article}/>
  } else {
    return <Loader/>
  }

}

export default compose(ArticleContainer)