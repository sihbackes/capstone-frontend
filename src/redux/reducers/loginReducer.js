import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  user: [null]
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    console.log(state);
      return{
        ...state,
        user: action.payload
      }
      case LOGOUT:
        return {
          ...state,
          user: null
        
        };
    default:
      return state
  }
}

export default loginReducer