import { useDispatch } from "react-redux";
import { addToFavoritesAction } from "../redux/actions";



const ResultsPage = ({results}) => {
  const dispatch = useDispatch();
  return(
  
    <>
    {results.map((data)=> (
      <img key={data.id} src={data.previewURL} alt="" onClick={() => { dispatch(addToFavoritesAction(data))}}/>
    ))}
  </>
  )
}

export default ResultsPage

