import { Link } from "react-router-dom";
import "../styles.css"
import { BsFillTrashFill} from 'react-icons/bs';
import { useAuth } from '../hooks/useAuth';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { app  } from '../services/firebase';


const FavoritesBoard = () => {
  const [favorites, setFavorites] = useState([]);
  const {user} = useAuth()

  useEffect(() => {
    if(user){
      const db = getDatabase(app)
      onValue(ref(db, `profile/${user.id}/favorites`), (snapshot) =>{
        const data = snapshot.val();
  
        const getFavorites = data ?? {};
    
        const parsedFavorites = Object.entries(getFavorites).map(([key, value]) => {
          return {
            favoriteId: key,
            id: value.id,
            url: value.url,
            tags: value.tags
          };
        });
    
        setFavorites(parsedFavorites);
      })
    }
    
    },[user])

    async function handleRemoveFavorites(data){
      const db = getDatabase(app);
      await remove(ref(db, `profile/${user.id}/favorites/${data}`))
    }
  
  return(
    <div className="mt-5 mb-5">
     <div className="masonry">

        {favorites.map((data)=> (
          <div className="div-pic masonry-image"  key={data.favoriteId}>
            <div className="bottom-image">
              <div>{data.tags}</div>
              <div><BsFillTrashFill className="icon" onClick={() => handleRemoveFavorites(data.favoriteId)}/></div>

            </div>
            <Link to={`/detail/${data.id}`}>
            <div className="image-container">
            <img src={data.url} alt="" />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesBoard