import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  content: []
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      ///prevent duplicate favourite
      const find = state.content.find(element => element.id === action.payload.id) 
      if(!find){
        return {
          ...state,
          content: [...state.content, action.payload],
        };
      } else {
        return state
      }
     
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter((element, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
}

export default favoritesReducer;