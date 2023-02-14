import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getImageByIdAction } from "../redux/actions";
import NavSearchBar from "./NavSearchBar";
import Footer from "./FooterComponent";
import {AiOutlineTag, AiFillHeart, AiOutlineHeart, AiOutlineDownload} from 'react-icons/ai'
import Comments from "./Comment";
import { useAuth } from '../hooks/useAuth';
import { getDatabase, push, ref, onValue, remove } from "firebase/database";
import { app  } from '../services/firebase';
import Suggestions from "./Suggestions";


const DetailsPage = () => {
  const params = useParams();
  let id = params.id
  const dispatch = useDispatch();
  const data = useSelector((state) => state.image.dataImage)
  const [favorites, setFavorites] = useState([]);
  const [tags, setTags] = useState();
  const {user} = useAuth()


  useEffect(() => {
    dispatch(getImageByIdAction(id))
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
    
    },[user, dispatch, id])
    
  useEffect(() => {
     ////////////////tags from api////////////
  const getTags = ()=> {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab',
        'X-RapidAPI-Host': 'scene-classification.p.rapidapi.com'
      },
      body: `{"url":"${data.hits[0].webformatURL}"}`
    };
    
    fetch('https://scene-classification.p.rapidapi.com/scenery-classify', options)
      .then(response => response.json())
      .then(response => setTags(response))
      .catch(err => console.error(err));
  }
  if(data.length !== 0 ){
    getTags()
  }
  },[data])

console.log(tags)

  const handleFavorites = (id) => {
   const find = favorites.find(element => element.id === id)
   if(find){
    return find
   } else{
    return false
   }
  }

  async function handleAddFavorites(data){

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


  if(data.length === 0 ){
    return <div>Loading...</div>
  }
  const image = data.hits[0]
  console.log(image.webformatURL)
  return(
    <>
     <NavSearchBar/>
      <div className="detail-container mt-5 mb-5">
      <div className="main-detail-div">
       <div>
         <img className="image-detail" src={image.webformatURL} alt="" />
         {tags && (
          <div className="detail-div"> <AiOutlineTag className="mr-2" size={24}/>
          {tags.categories.toString()}
          </div>
         )}
         
       </div>
       <div className="image-detail-info">
         <div>
           <a href={`https://pixabay.com/users/${image.user}-${image.user_id}/`} target="_blank" rel="noreferrer">
             <div className="user-info">
                <img className="user-image" src={image.userImageURL} alt="" />
                 <div className="user-info-p"><strong>{image.user}</strong></div>
             </div>
           </a>
         </div>
         {user && (
         <div className="detail-div d-flex">
         <div onClick={() => handleFavorites(image.id) ? handleRemoveFavorites(handleFavorites(image.id).favoriteId) : handleAddFavorites(image)}>
               {handleFavorites(image.id)? <AiFillHeart size={22} className="icon red"/>: <AiOutlineHeart size={22} className="icon"/>}  
               </div>
         Add to Favourites
      </div>
         )}

         <div className="detail-div"> <AiOutlineTag className="mr-2" size={24}/>{image.tags}</div>
         
         <div>
          <a href={image.pageURL} target="_blank" rel="noreferrer"><button className="download-btn">Download <AiOutlineDownload size={23}/></button></a>
         </div>
         <Suggestions/>
       </div>
       
      </div>
    
      </div>
      
        <Comments/>
      
     <Footer/>
    </>
    
  )
}

export default DetailsPage