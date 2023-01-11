import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";

const SearchComponent = () => {

  const images = useSelector((state) => state.query.dataImages)
  const dispatch = useDispatch();
  const query = "cat"
  useEffect(()=> {
  dispatch(getDataAction(query))
  }, [])

  return(
   console.log(images)
  )
}

export default SearchComponent