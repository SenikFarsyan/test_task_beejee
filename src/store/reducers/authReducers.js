const initState = {
  admin: { id: 1, name: 'admin', pass: '123', isLogedIn: false }
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      if (action.payload.name === 'admin' && action.payload.pass === '123') {
        state.admin.isLogedIn = true;
      }
      return {
        ...state
      };
    default:
      return state;
  }
};

export default authReducer;
