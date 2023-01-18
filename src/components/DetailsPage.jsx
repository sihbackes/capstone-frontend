import {  useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react";
import { getImageByIdAction } from "../redux/actions";

const DetailsPage = () => {
  const data = useSelector((state) => state.image.dataImage)
  const dispatch = useDispatch();
  const params = useParams();
  let id = params.id
 

  useEffect(() => {
   dispatch(getImageByIdAction(id))
  },[]);
  console.log(data.hits)
}

export default DetailsPage