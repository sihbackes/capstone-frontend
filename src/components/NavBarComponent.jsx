import {Container, Navbar} from 'react-bootstrap';
import {MdFavorite} from 'react-icons/md'
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
         <Link to="/favorites">
         <div className='fav-icon'> 
              <div>
              <MdFavorite size={30}/>
              </div>
              <div className='fav-number'>{favorites.length}</div>
              </div>
             
         </Link>
        </Navbar.Text>

    </Container>
  </Navbar>
  );
}

export default NavbarComponent