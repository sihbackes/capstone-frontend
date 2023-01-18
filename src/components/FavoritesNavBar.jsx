import {Container, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
const FavoritesNavBar = () => {
  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/">Home</Link>
      </Navbar.Text>
        <Navbar.Text className="justify-content-end">
  
        </Navbar.Text>

    </Container>
  </Navbar>
  )
}

export default FavoritesNavBar