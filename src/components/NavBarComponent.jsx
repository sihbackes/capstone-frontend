import {Container, Navbar, Dropdown} from 'react-bootstrap';
import {MdFavorite} from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"
import { logoutAction } from '../redux/actions';
import userProfile from "../img/user-profile.png" 
import logo from '../img/logo.png'


const NavbarComponent = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content)
  const logged = useSelector((state) => state.logged.user)

  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/"><img className="logo" src={logo} alt="pixabay logo"/></Link>
      </Navbar.Text>
      <>
      {logged && (
        <Navbar.Text>
         
           <div className='user-bar'>
            <div>
             <Dropdown>
               <Dropdown.Toggle id="dropdown-basic-users">
                 Explore
               </Dropdown.Toggle>
               <Dropdown.Menu>
                 <Dropdown.Item>Use 1</Dropdown.Item>
                 <Dropdown.Item>User 2</Dropdown.Item>
                 <Dropdown.Item>User 3</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
            </div>
            <div>
            <Dropdown>
               <Dropdown.Toggle id="dropdown-basic-logout">
               <img className='user-pic' src={userProfile} alt="" />
               </Dropdown.Toggle>
               <Dropdown.Menu>
                <Dropdown.Item onClick={() => {dispatch(logoutAction(0)); navigate("logout")}}>Log Out</Dropdown.Item>
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
      )}{!logged && (
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