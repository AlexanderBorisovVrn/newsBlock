import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {withNewsService} from '../../hoc';
import {compose} from 'redux';
import {fetchNews} from '../../../actions';
import ArticleCard from '../../article-card';
import Loader from '../../loader';


const NewsListContainer = ({newsService}) => {
const dispatch = useDispatch();
const {loading,news}=useSelector(state=>state.data);

  useEffect(() => {
    fetchNews(newsService,dispatch)()
  }, [fetchNews]);

  if (loading) {
    return <Loader/>
  }
  else {
    return (
      <React.Fragment>
        {news.map(article => {
          const {id} = article;
          return <ArticleCard article={article} key={id} path={`/article/${id}`}/>
        })
}
      </React.Fragment>
    )
  }
}



export default compose(withNewsService)(NewsListContainer);