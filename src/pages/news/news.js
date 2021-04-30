import React, {useEffect, useCallback} from 'react';
import './news.scss';
import {connect} from 'react-redux';
import {withNewsService} from '../../components/hoc/';
import {compose, bindActionCreators} from 'redux';
import {fetchNews} from '../../actions/';
import ArticleCard from '../../components/article-card'

const News = ({news, loading, fetchNews}) => {

  useEffect(() => {
    fetchNews()
  }, [fetchNews]);
  if (loading) {
    return (
      <p>Sorry</p>
    )
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

const mapStateToProps = (state) => {
  const {loading, news} = state;
  return {loading, news}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {newsService} = ownProps;
  return {
    fetchNews: fetchNews(newsService, dispatch)
  }

}

export default compose(withNewsService, connect(mapStateToProps, mapDispatchToProps))(News);