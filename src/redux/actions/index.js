export const GET_DATA = "GET_DATA";
export const GET_IMG_BY_ID = "GET_IMG_BY_ID"


export const getDataAction = (query, page, type)=> {
  return async (dispatch)=> {
    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY
   
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=${type}&per_page=60&page=${page}`
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


export const getImageByIdAction = (id) => {
  return async (dispatch)=> {
    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&id=${id}`
      );
      if(response.ok){
        let data = await response.json();
        dispatch({
          type:GET_IMG_BY_ID,
          payload:data,
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}
