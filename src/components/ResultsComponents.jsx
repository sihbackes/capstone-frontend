import { useDispatch } from "react-redux";
import { addToFavoritesAction } from "../redux/actions";

const ResultsPage = ({data}) => {
  const dispatch = useDispatch();
  return(
    <><img src={data.previewURL} alt=""    onClick={() => {
      dispatch(addToFavoritesAction(data));
    }}/></>
  )
}

export default ResultsPage