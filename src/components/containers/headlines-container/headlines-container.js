import React, {useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeadlines} from '../../../reducers/fetchDataSlice';
import TopHeadlines from '../../top-headlines';
import newsContext from '../../news-context';


const HeadlinesContainer = () => {
  //create request top headlines
  const dispatch = useDispatch();
  
  const {query,fetchData:{headlines}} = useSelector(state => state);
  const {getTopHeadlines,getHeadlinesInCountry} = useContext(newsContext);

  useEffect(() => {
    fetchHeadlines(getTopHeadlines,getHeadlinesInCountry(query))(dispatch)
 },[getTopHeadlines,dispatch,query,getHeadlinesInCountry]);

 return(
   <ul>
      {
        headlines.map((txt,idx)=><TopHeadlines key={idx}>{txt}</TopHeadlines>)
      }
   </ul>
  )
}



export default HeadlinesContainer;
