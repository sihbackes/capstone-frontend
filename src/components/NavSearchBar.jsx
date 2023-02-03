import {Container, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import {Form, Dropdown } from 'react-bootstrap';
import logo from '../img/logo.png'
import {MdFavorite} from 'react-icons/md'
import { useAuth } from '../hooks/useAuth';
import "../styles.css"
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { app  } from '../services/firebase';

const NavSearchBar = () => {
  let navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [page] = useState(1);
  const [type, setType] = useState("All");
  const {user} = useAuth()




  useEffect(() => {
   if(user){
     const db = getDatabase(app)
     onValue(ref(db, `profile/${user.id}/favorites`), (snapshot) =>{
       const data = snapshot.val();
 
       const getFavorites = data ?? {};
   
       const parsedFavorites = Object.entries(getFavorites).map(([key, value]) => {
         return {
           favoriteId: key,
           id: value.id,
           url: value.url,
           tags: value.tags
         };
       });

   
       setFavorites(parsedFavorites);
     })
   }
   
   },[user])
  
  const handleSignOut = ()=> {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.reload(false);
    }).catch((error) => {
      // An error happened.
    })
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
    navigate (`/results/${type}/${query}`)
  };
  return(
    <>
        <Navbar className='navbar'>
          <Container>
           <Navbar.Text>
             <Link to="/"><img className="logo" src={logo} alt="pixabay logo"/></Link>
           </Navbar.Text>
           <Form className="search-form" onSubmit={handleSubmit}>
            <Form.Control
             className="form-control-search"
             type="search"
             value={query}
             onChange={handleChange}
             placeholder="Search"
            />
            <Dropdown className="filter">
             <Dropdown.Toggle id="dropdown-basic">
             {type}
             </Dropdown.Toggle>

             <Dropdown.Menu>
              <Dropdown.Item onClick={() => {setType("photo")}}>Photo</Dropdown.Item>
              <Dropdown.Item onClick={() => {setType("illustration")}}>Illustration</Dropdown.Item>
              <Dropdown.Item onClick={() => {setType("vector")}}>Vector</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
           </Form>
           {user && (
        <Navbar.Text>
         
           <div className='user-bar'>

            <div>
            <Dropdown>
               <Dropdown.Toggle id="dropdown-basic-logout">
               <img className='user-pic' src={user.avatar} alt="" />
               </Dropdown.Toggle>
               <Dropdown.Menu>
                 <Dropdown.Item><Link to={`/profile/${user.id}`}>My Profile</Link></Dropdown.Item>
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
      )}{!user && (
      <Navbar.Text>
        <Link to="/join"><button className="join-btn">Join</button></Link>
      </Navbar.Text>
      )}

          </Container>
        </Navbar>
    </>
  )
}


export default NavSearchBar