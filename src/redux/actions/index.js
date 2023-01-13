export const GET_DATA = "GET_DATA";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getDataAction = (query, page)=> {
  return async (dispatch)=> {
    const apiKey = "32769201-9cad72badaaf5bf0c85bbf23e"
   
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=30&page=${page}&min_width=500`
      );
      if(response.ok){
        let data = await response.json();
        dispatch({
          type:GET_DATA,
          payload:data,
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}


export const addToFavoritesAction = (pic) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: pic,
  };
};

export const removeFromFavoritesAction = (i) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: i,
});
