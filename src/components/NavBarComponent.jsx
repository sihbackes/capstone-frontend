import {Container, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector} from "react-redux"

const NavbarComponent = () => {
  const favorites = useSelector((state) => state.favorites.content)


  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/">Home</Link>
      </Navbar.Text>
        <Navbar.Text className="justify-content-end">
         <Link to="/favorites">Favorites({favorites.length})</Link>
        </Navbar.Text>

    </Container>
  </Navbar>
  );
}

export default NavbarComponent