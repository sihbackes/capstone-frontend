import { useSelector } from "react-redux"
import ResultsPage from "./ResultsComponents"
import {Container} from 'react-bootstrap';

const FavoritesBoard = () => {
  const favorites = useSelector((state) => state.favorites.content)
 
  return(
    <Container>
    {<ResultsPage results={favorites}/>}
    </Container>
  )
}

export default FavoritesBoard