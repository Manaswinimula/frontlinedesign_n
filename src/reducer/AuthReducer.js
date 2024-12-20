// const AuthReducer = (state, action) => {
//     switch(action.type){
//         case "LOGIN": {
//             return {isAuthenticated: true, user: action.payload};
//         }
//         case "LOGOUT": {
//             return {isAuthenticated: false, user: null};
//         }
//         default:
//             return state;
//     }
// }

// export default AuthReducer;

// Example of AuthReducer.js
const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payLoad,
        };
      case "LOGOUT":
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  