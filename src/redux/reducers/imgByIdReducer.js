import { GET_IMG_BY_ID} from "../actions";

const initialState = {
  dataImage:[]
}

const imgByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMG_BY_ID:
      return {
        ...state,
        dataImage: action.payload,
      }
   
  
    default:
      return state
  }
}

export default imgByIdReducer