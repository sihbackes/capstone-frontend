import {Container, Navbar, Dropdown} from 'react-bootstrap';
import {MdFavorite} from 'react-icons/md'
import { Link} from "react-router-dom";
import { useSelector} from "react-redux"
import logo from '../img/logo.png'
import { useAuth } from '../hooks/useAuth';
import { getAuth, signOut } from "firebase/auth";

const NavbarComponent = () => {

  const favorites = useSelector((state) => state.favorites.content)
  const {user} = useAuth()

const handleSignOut = ()=> {
  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.reload(false);
  }).catch((error) => {
    // An error happened.
  })
}
 

  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/"><img className="logo" src={logo} alt="pixabay logo"/></Link>
      </Navbar.Text>
      <>
      {user && (
        <Navbar.Text>
         
           <div className='user-bar'>
            <div>
            <Dropdown>
               <Dropdown.Toggle id="dropdown-basic-logout">
               <img className='user-pic' src={user.avatar} alt="" />
               </Dropdown.Toggle>
               <Dropdown.Menu>
                <Dropdown.Item><Link to={`/profile`}>My Profile</Link></Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Log Out</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
              
            </div>
            <Link to="/favorites">
             <div className='fav-icon'> 
               <div>
                 <MdFavorite size={30}/>
               </div>
               <div className='fav-number'>{favorites.length}</div>
             </div>
            </Link>
           </div>
         
      </Navbar.Text>
      )}{!user&& (
      <Navbar.Text>
        <Link to="/join"><button className="join-btn">Join</button></Link>
      </Navbar.Text>
      )}
      </>
    </Container>
  </Navbar>
  );
}

export default NavbarComponent