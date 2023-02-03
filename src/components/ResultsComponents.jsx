import "../styles.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link} from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from "react";
import { getDatabase, push, ref, onValue, remove } from "firebase/database";
import { app  } from '../services/firebase';




const ResultsComponent = ({results}) => {
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


  const handleFavorites = (id) => {
   const find = favorites.find(element => element.id === id)
   if(find){
    return find
   } else{
    return false
   }
  }


  async function handleAddFavorites(data){
    console.log(data);
    const newFavorite = {
      id: data.id,
      url:  data.webformatURL,
      tags: data.tags
    }

    const db = getDatabase(app);
    await push(ref(db, `profile/${user.id}/favorites`), newFavorite);
  }

  async function handleRemoveFavorites(data){
    const db = getDatabase(app);
    await remove(ref(db, `profile/${user.id}/favorites/${data}`));
  }

  return(
  <div>
      <div className="masonry">
        {results.map((data)=> (
          <div className="div-pic masonry-image" key={data.id}>
            {user && (
               <div className="bottom-image">
               <div>{data.tags}</div>
               <div onClick={() => handleFavorites(data.id) ? handleRemoveFavorites(handleFavorites(data.id).favoriteId) : handleAddFavorites(data)}>
               {handleFavorites(data.id)? <AiFillHeart size={22} className="icon red"/>: <AiOutlineHeart size={22} className="icon"/>}  
               </div>
               </div>
            )}{!user &&(
              <div className="bottom-image">
              <div>{data.tags}</div>
              </div>
            )}
           
       
            <Link to={`/detail/${data.id}`}> 
            <div className="image-container">
             <img  src={data.webformatURL} alt="" />
            </div>
            </Link>
           
          </div>
        ))}
      </div>
  </div>
  )
}

export default ResultsComponent

