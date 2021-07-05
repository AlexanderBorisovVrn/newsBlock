const onForm = () => {
  return {type: 'ON_FORM'}
}

const hideForm = () => {
  return {type: 'HIDE_FORM'}
}


const onLoggedIn=()=>{
  return {type:'ON_LOGGED_IN'}
}


export {
  onForm,
  hideForm,
  onLoggedIn
}