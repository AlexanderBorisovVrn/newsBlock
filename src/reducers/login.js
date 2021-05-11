const login = (state, action) => {
  if (state === undefined) {
    return {formVisibility: false, isLogged: false}
  }
  switch (action.type) {
    case 'ON_FORM':
      return {...state,formVisibility: true};
    case 'HIDE_FORM':
      return {...state,formVisibility: false}
    default:
      return state;
  }

}

export default login;