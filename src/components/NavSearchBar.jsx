import {Container, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import {Form, Dropdown } from 'react-bootstrap';
import "../styles.css"


const NavSearchBar = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("All");
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
  };
  return(
    <>
        <Navbar className='navbar'>
    <Container>
      <Navbar.Text>
        <Link to="/">Home</Link>
      </Navbar.Text>
      <Form className="main-form" onSubmit={handleSubmit}>
        <Form.Control
          className="form-control"
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
           <Dropdown.Item onClick={() => {setType("Photo")}}>Photo</Dropdown.Item>
           <Dropdown.Item onClick={() => {setType("Illustration")}}>Illustration</Dropdown.Item>
           <Dropdown.Item onClick={() => {setType("Vector")}}>Vector</Dropdown.Item>
           </Dropdown.Menu>
          </Dropdown>
   </Form>
        <Navbar.Text className="justify-content-end">
         <Link to="/favorites">Favorites({favorites.length})</Link>
        </Navbar.Text>

    </Container>
  </Navbar>
    </>
  )
}


export default NavSearchBar