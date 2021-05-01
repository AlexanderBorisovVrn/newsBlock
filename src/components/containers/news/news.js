import React, {useEffect, useCallback} from 'react';
import './news.scss';
import {connect} from 'react-redux';
import {withNewsService} from '../../hoc';
import {compose} from 'redux';
import {fetchNews} from '../../../actions';
import ArticleCard from '../../article-card';
import Loader from '../../loader';

const News = ({news, loading, fetchNews}) => {

  useEffect(() => {
    fetchNews()
  }, [fetchNews]);

  

  if (loading) {
    return <Loader/>
  }

  if (!loading) {
    return (
      <section className='news'>
        <div className='wrap'>
          <div className='news__inner'>
            {news.map(article => {
              return <ArticleCard article={article} key={article.id}/>
            })}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({loading, news, error}) => {
  return {loading, news, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {newsService} = ownProps;
  return {
    fetchNews: fetchNews(newsService, dispatch),
  }

}

export default compose(withNewsService, connect(mapStateToProps, mapDispatchToProps))(News);