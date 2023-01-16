import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import {Form, Container, Row} from 'react-bootstrap';
import ResultsPage from "./ResultsComponents";
import "../styles.css"

const SearchComponent = () => {

  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query, page));
  };

  const handleNextButton = async (e) => {
    setPage(page + 1)
    e.preventDefault();
    dispatch(getDataAction(query, page));
  }
  const handleBackButton = async (e) => {
    setPage(page - 1)
    e.preventDefault();
    dispatch(getDataAction(query, page));
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