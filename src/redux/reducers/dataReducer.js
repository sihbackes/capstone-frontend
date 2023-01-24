import { GET_DATA} from "../actions";


const initialState = {
  dataImages:[]
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dataImages: action.payload,
      }
  
    default:
      return state
  }
}

export default dataReducer