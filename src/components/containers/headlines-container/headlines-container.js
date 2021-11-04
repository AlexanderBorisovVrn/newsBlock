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
   <div>
     <ul style={{ backgroundColor:'rgba(128, 128, 128, 0.335)',borderRadius:'5px',padding:'5px'}}>
      {
        headlines.map((txt,idx)=><TopHeadlines key={idx}>{txt}</TopHeadlines>)
      }
    </ul>
   </div>
   
  )
}



export default HeadlinesContainer;
