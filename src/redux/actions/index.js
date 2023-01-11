export const GET_DATA = "GET_DATA";

export const getDataAction = (query)=> {
  return async (dispatch)=> {
    const apiKey = "32769201-9cad72badaaf5bf0c85bbf23e"
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`
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

