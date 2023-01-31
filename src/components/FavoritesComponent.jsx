import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { removeFromFavoritesAction } from "../redux/actions";
import "../styles.css"
import { BsFillTrashFill} from 'react-icons/bs';
import { useEffect } from "react";
import { useState } from "react";

const FavoritesBoard = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const [newFav, setNewFav] = useState(null)
  const dispatch = useDispatch();


  //  useEffect(() => {
  //  const list = []
  //   const fetchFavList = async (id)=> {
  //     const apiKey = "32769201-9cad72badaaf5bf0c85bbf23e"
  //     try {
  //       const response = await fetch(
  //         `https://pixabay.com/api/?key=${apiKey}&id=${id}`
  //       );
  //       if(response.ok){
  //         let data = await response.json();
  //        list.push(data.hits[0])

  //       }
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   favorites.map((fav) => 
  //     fetchFavList(fav.id)
  //   )
  //  setNewFav(list)
  //  }, [favorites]);

  // if(newFav === null){
  //   return "Loading..."
  //  }

  return(
    <div className="mt-5 mb-5">
     <div className="masonry">
        {favorites.map((data, i)=> (
          <div className="div-pic masonry-image"  key={data.id}>
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