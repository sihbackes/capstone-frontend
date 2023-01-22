import {Container, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector} from "react-redux"
import logo from '../img/logo.png'

const NavbarComponent = () => {
  const favorites = useSelector((state) => state.favorites.content)


  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/"><img className="logo" src={logo} alt="pixabay logo"/></Link>
      </Navbar.Text>
        <Navbar.Text className="justify-content-end">
         <Link to="/favorites">Favorites({favorites.length})</Link>
        </Navbar.Text>

    </Container>
  </Navbar>
  );
}

export default NavbarComponent