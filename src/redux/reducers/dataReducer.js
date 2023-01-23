import { GET_DATA, GET_NEXT } from "../actions";


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
      // case GET_NEXT:
      //   const actualState = state.dataImages
      //   let fixHits = actualState.hits.concat(action.payload.hits)
      //   actualState.hits = fixHits
  
        // return {
        //   ...state,
        //   dataImages: actualState,
        // }
  
    default:
      return state
  }
}

export default dataReducer