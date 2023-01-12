import { useSelector,  useDispatch  } from "react-redux"
import { removeFromFavoritesAction } from "../redux/actions";


const FavoritesBoard = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const dispatch = useDispatch();
  return(
    <>
    {favorites.map((pic,i) => (
      <img src={pic.previewURL} alt=""  onClick={() => {
        dispatch(removeFromFavoritesAction(i));
      }}/>
    ))}
    </>
  )
}

export default FavoritesBoard