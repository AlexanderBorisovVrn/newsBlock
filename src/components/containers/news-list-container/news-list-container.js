import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withNewsService} from '../../hoc';
import {compose} from 'redux';
import {fetchNews} from '../../../actions';
import ArticleCard from '../../article-card';
import Loader from '../../loader';

const NewsListContainer = ({news, loading, fetchNews}) => {

  useEffect(() => {
    fetchNews()
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

const mapStateToProps = ({
  data: {
    loading,
    news
  }
}) => {
  return {loading, news}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {newsService} = ownProps;
  return {
    fetchNews: fetchNews(newsService, dispatch)
  }

}

export default compose(withNewsService, connect(mapStateToProps, mapDispatchToProps))(NewsListContainer);