import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { removeFromFavoritesAction} from "../redux/actions";
import "../styles.css"
import { BsFillTrashFill} from 'react-icons/bs';


const FavoritesBoard = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const dispatch = useDispatch();

  
  return(
    <div className="mt-5 mb-5">
     <div className="masonry">

        {favorites.map((data, i)=> (
          <div className="div-pic masonry-image"  key={i}>
            <div className="bottom-image">
              <div>{data.tags}</div>
              <div><BsFillTrashFill className="icon" onClick={() => { dispatch(removeFromFavoritesAction(i))}}/></div>

            </div>
            <Link to={`/detail/${data.id}`}>
            <div className="image-container">
            <img src={data.webformatURL} alt="" />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesBoard