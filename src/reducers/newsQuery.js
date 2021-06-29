const initialState ={
  newsTheme:'all',
  newsFrom:'2021-06-21',
  newsTo:'2021-06-27',
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