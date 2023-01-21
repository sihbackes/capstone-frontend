import { useDispatch } from "react-redux";
import { addToFavoritesAction } from "../redux/actions";
import Masonry from 'react-masonry-css'
import "../styles.css"
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const ResultsComponent = ({results}) => {
  const dispatch = useDispatch();
 

  const breakpoints = {
    default: 4,
    1250: 3,
    1100: 2,
    700: 1
  }
  return(
  <>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {results.map((data)=> (
          <div className="div-pic" key={data.id}>
            <div className="bottom-image">
            <div>{data.tags}</div>
            <div><AiFillHeart size={22} className="icon"  onClick={() => { dispatch(addToFavoritesAction(data))}}/></div>
            </div>
            <Link to={`/detail/${data.id}`}>
             <img className="image-list" src={data.webformatURL} alt="" />
            </Link>
            
          </div>
        ))}
      </Masonry>
  </>
  )
}

export default ResultsComponent

