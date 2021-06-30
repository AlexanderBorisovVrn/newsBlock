import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withNewsService} from '../../hoc';
import {compose} from 'redux';
import {fetchNews} from '../../../actions';
import ArticleCard from '../../article-card';
import Loader from '../../loader';

const NewsListContainer = ({newsService}) => {
  //создает запрос списка новостей передает ответ в ArticleCard
  const dispatch = useDispatch();
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

  function getId(title) {
    //создает id из title
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s]/g, '-')
      .replace(/(?:[^\w])/, '')
  }

  if (loading) {
    return <Loader/>
  } else {
    return (

      <React.Fragment>
        {news.map(article => {
          const id = getId(article.title);
          return <ArticleCard article={article} key={id} path={`/article/${id}`}/>
        })
}
      </React.Fragment>
    )
  }
}

export default compose(withNewsService)(NewsListContainer);