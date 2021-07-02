const initialState ={
  category:'all',
  from:'',
  to:'',
  sortBy:''
}

const newsQuery =(state=initialState,action)=>{
  switch (action.type) {
    case'SET_CATEGORY':
      return {...initialState,category:action.payload}
        default:
      return state
  }
}

export default newsQuery