const login = (state, action) => {
  if (state === undefined) {
    return {formVisibility: false, isLogged: false, userName: '', password: ''}
  }
  switch (action.type) {
    case 'ON_FORM':
      return {
        ...state,
        formVisibility: true
      };
    case 'HIDE_FORM':
      return {
        ...state,
        formVisibility: false
      };
    case 'ON_USERNAME_CHANGE':
      return {
        ...state,
        userName: action.payload
      };
    case 'ON_PASSWORD_CHANGE':
      return {
        ...state,
        password: action.payload
      };
    case 'ON_LOGGED_IN':
      return {
        ...state,
        isLogged: true
      }
    default:
      return state;
  }

}

export default login;