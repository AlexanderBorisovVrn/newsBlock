const onForm = () => {
  return {type: 'ON_FORM'}
}

const hideForm = () => {
  return {type: 'HIDE_FORM'}
}

const onPasswordVisible = ()=>{
  return {type:'ON_PASSWORD_VISIBLE'}
}

const onLoggedIn=()=>{
  return {type:'ON_LOGGED_IN'}
}


export {
  onForm,
  hideForm,
  onPasswordVisible,
  onLoggedIn
}