import React, {useEffect,useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {compose} from 'redux';
import {fetchNews} from '../../../actions';
import ArticleCard from '../../article-card';
import Loader from '../../loader';
import NewsContext from '../../news-context';

const NewsListContainer = () => {
  //создает запрос списка новостей передает ответ в ArticleCard
  const dispatch = useDispatch();
  const newsService = useContext(NewsContext);

  const {
    data: {
      loading,
      news
    },
    query //параметры запроса
  } = useSelector(state => state);

  useEffect(() => {
    fetchNews(newsService, query, dispatch)()
  }, [newsService, query, dispatch]);

  function getId() {
    return Math.floor(Math.random() * 198654) + Math.random() * 1998543
  }

  if (loading) {
    return <Loader/>
  } else {
    return (

      <React.Fragment>
        {news.map(article => {
          const id = getId();
          return <ArticleCard article={article} key={id} path={`/article/${id}`}/>
        })
}
      </React.Fragment>
    )
  }
}

export default compose(NewsListContainer);