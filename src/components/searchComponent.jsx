import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import {Form, Container, Row} from 'react-bootstrap';
import ResultsPage from "./ResultsComponents";


const SearchComponent = () => {

  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query));
  };

const results = data.hits
console.log(results)
  return(
    <>
   <Container>
    <Row>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Search"
        />
      </Form>
      {results && (
          <div>
            {results.map((pic) => (    
            <ResultsPage key={pic.id} data={pic}/>
            ))}
          </div>
        )}
    </Row>
   </Container>
   
   </>
  )
}

export default SearchComponent