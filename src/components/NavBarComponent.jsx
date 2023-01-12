import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useSelector} from "react-redux"

const NavbarComponent = () => {
  const favorites = useSelector((state) => state.favorites.content)


  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
         <Link to="/favorites">Favorites({favorites.length})</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent