import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction } from "../redux/actions";
import Masonry from 'react-masonry-css'
import "../styles.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const ResultsComponent = ({results}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content)


  const handleFavorites = (id) => {
   const find = favorites.find(element => element.id === id)
   if(find){
    return true
   } else{
    return false
   }
  }


  return(
  <div className="mt-4">
      <div className="masonry">
        {results.map((data)=> (
          <div className="div-pic masonry-image" key={data.id}>
            
            <div className="bottom-image">
            <div>{data.tags}</div>
            <div onClick={() => { dispatch(addToFavoritesAction(data))}}>
            {handleFavorites(data.id)? <AiFillHeart size={22} className="icon red"/>: <AiOutlineHeart size={22} className="icon"/>}  
            </div>
            </div>
            <Link to={`/detail/${data.id}`}> 
        
             <img className="image-list" src={data.webformatURL} alt="" />
            </Link>
            
          </div>
        ))}
      </div>
  </div>
  )
}

export default ResultsComponent

