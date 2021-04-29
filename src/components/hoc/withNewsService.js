import React from 'react';
import {NewsConsumer} from '../news-context';

const withNewsService = (Wrap)=>{
  return (props)=>{
   return <NewsConsumer>
      {(newsService)=>{
        return <Wrap {...props} newsService={newsService} />
      }}
    </NewsConsumer>
  }
}



export default withNewsService;