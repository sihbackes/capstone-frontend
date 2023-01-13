import { useDispatch } from "react-redux";
import { addToFavoritesAction } from "../redux/actions";
import Masonry from 'react-masonry-css'
import "../styles.css"
import { AiFillHeart } from 'react-icons/ai';

const ResultsPage = ({results}) => {
  const dispatch = useDispatch();

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }
  return(
  <>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {results.map((data)=> (
          <div className="div-pic" key={data.id}>
            <AiFillHeart className="icon" onClick={() => { dispatch(addToFavoritesAction(data))}}/>
            <img  src={data.webformatURL} alt="" />
          </div>
        ))}
      </Masonry>
  </>
  )
}

export default ResultsPage

