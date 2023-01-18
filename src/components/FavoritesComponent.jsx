import { useSelector, useDispatch } from "react-redux"
import Masonry from 'react-masonry-css'
import { removeFromFavoritesAction } from "../redux/actions";
import "../styles.css"
import { BsFillTrashFill} from 'react-icons/bs';

const FavoritesBoard = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const dispatch = useDispatch();
  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1
  }
  return(
    <>
     <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {favorites.map((data, i)=> (
          <div className="div-pic"  key={data.id}>
           <BsFillTrashFill className="icon" onClick={() => { dispatch(removeFromFavoritesAction(i))}}/>
            <img  src={data.webformatURL} alt="" />
          </div>
        ))}
      </Masonry>
    </>
  )
}

export default FavoritesBoard