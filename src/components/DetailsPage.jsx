import {  useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react";
import { getImageByIdAction } from "../redux/actions";
import { Container } from "react-bootstrap";

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
  
    <Container>
      <div>
      <img  src={image.webformatURL} alt="" />
      </div>
      <div>
        <p>Likes ({image.likes})</p>
        <p>Tags ({image.tags})</p>
        <p>Downloads ({image.downloads})</p>
      </div>
    
    </Container>

    </>
    
  )
}

export default DetailsPage