import {  useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react";
import { getImageByIdAction } from "../redux/actions";
import { Container } from "react-bootstrap";
import NavSearchBar from "./NavSearchBar";

const DetailsPage = () => {
  const data = useSelector((state) => state.image.dataImage)
  const dispatch = useDispatch();
  const params = useParams();
  let id = params.id
 

  useEffect(() => {
   dispatch(getImageByIdAction(id))
  },[]);
  console.log(data)
  const image = data.hits[0]


  return(
    <>
   <NavSearchBar/>
    <Container>
      <div className="main-detail-div">
      <div>
      <img className="image-detail" src={image.webformatURL} alt="" />
      </div>
      <div className="image-detail-info">
        <p><strong>Likes</strong>({image.likes})</p>
        <p><strong>Tags</strong>({image.tags})</p>
        <p><strong>Downloads</strong>({image.downloads})</p>
      </div>
      </div>
     
    
    </Container>

    </>
    
  )
}

export default DetailsPage