import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getImageByIdAction } from "../redux/actions";
import { addToFavoritesAction } from "../redux/actions";
import NavSearchBar from "./NavSearchBar";
import Footer from "./FooterComponent";
import {AiOutlineTag, AiFillHeart, AiOutlineHeart, AiOutlineDownload} from 'react-icons/ai'

const DetailsPage = () => {
  const params = useParams();
  let id = params.id
  const dispatch = useDispatch();
  const data = useSelector((state) => state.image.dataImage)
  const favorites = useSelector((state) => state.favorites.content)

  useEffect(() => {
    dispatch(getImageByIdAction(id))
  }, [dispatch, id]);

  const handleFavorites = (id) => {
    const find = favorites.find(element => element.id === id)
    if(find){
     return true
    } else{
     return false
    }
   }

  
  if(data.length === 0) {
    return "loading...."
  }

  if(parseInt(id) !== data.hits[0].id ){
    return "loading...."
  }
  
  const image = data.hits[0]
  

  return(
    <>
     <NavSearchBar/>
      <div className="detail-container mt-5 mb-5">
      <div className="main-detail-div">
       <div>
         <img className="image-detail" src={image.webformatURL} alt="" />
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
         <div className="detail-div" onClick={() => { dispatch(addToFavoritesAction(image))}}>
            {handleFavorites(image.id)? <AiFillHeart  size={22} className="icon red mr-2"/>: <AiOutlineHeart size={22} className="icon mr-2"/>} 
            Add to Favourites
         </div>
         <div className="detail-div"> <AiOutlineTag className="mr-2" size={24}/>{image.tags}</div>
         <div>
          <a href={image.pageURL} target="_blank" rel="noreferrer"><button className="download-btn">Download <AiOutlineDownload size={23}/></button></a>
         </div>
       </div>
      </div>
     
    
      </div>
     <Footer/>
    </>
    
  )
}

export default DetailsPage