import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import {Form, Dropdown } from 'react-bootstrap';
import ResultsPage from "./ResultsComponents";
import "../styles.css"

const SearchComponent = () => {

  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("All");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
  };

  const handleNextButton = async (e) => {
    setPage(page + 1)
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
  }
  const handleBackButton = async (e) => {
    setPage(page - 1)
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
  }
const results = data.hits

  return(
    <>

   <div className="main-banner">
    
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
   </div>
 
      {results && (
          <div>
            <ResultsPage results={results}/>
          </div>
      )}
      <button onClick={handleBackButton} disabled={page===1}>Back</button>
      <button onClick={handleNextButton}>Next</button>
    
 
   
   </>
  )
}

export default SearchComponent