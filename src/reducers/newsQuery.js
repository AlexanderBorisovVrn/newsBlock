const initialState ={
  categry:'all',
  from:'2021-06-21',
  to:'2021-06-27',
  sortBy:''
}

const newsQuery =(state=initialState,action)=>{
  switch (action.type) {
    case 'BITCOIN_NEWS':
      return initialState
        default:
      return state
  }
}

export default newsQuery