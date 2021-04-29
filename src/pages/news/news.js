import React from 'react';
import './news.scss';
import {connect} from 'react-redux';
import {withNewsService} from '../../components/hoc/';
import {compose} from 'redux';
import {newsLoaded} from '../../actions/';
import Article from '../../components/article'

const News = ({news,newsLoaded,newsService}) => {
  newsService
  .getNews()
  .then(news=>newsLoaded(news)
  )
  return (
    <section className='news'>
      <div className='wrap'>
        <div className='news__inner'>
          {news.map(article => {
            return <Article article={article} key={article.id}/>
          })}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  const {loading, news} = state;
  return {loading, news}
}

const mapDispatchToProps = (dispatch)=>{
  return {newsLoaded:(payload)=>dispatch(newsLoaded(payload))}
}

export default compose(
  withNewsService,
  connect(mapStateToProps,mapDispatchToProps)
)(News);