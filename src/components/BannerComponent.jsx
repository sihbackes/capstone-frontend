import '../styles.css'
import {Form, Dropdown } from 'react-bootstrap';
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getDataAction } from "../redux/actions"
import ResultsPage from "./ResultsComponents";
import {MdAddAPhoto} from 'react-icons/md'
import {BsBrushFill} from 'react-icons/bs'
import {BsVectorPen} from 'react-icons/bs'

const Banner = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("All");
  const[background, setBackground] = useState("2022/12/23/16/03/sunrise-7674594_960_720.jpg")
 

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query, page, type));
    navigate ("results")
  };

  const results = data.hits
 console.log(results)
  return(
    <>
      <div className="banner">
       <img className='image-banner' src={`https://cdn.pixabay.com/photo/${background}`} alt=''/>
       <div className='form-div'>
        <div className='info-banner'>
        <h1>Stunning free images & royalty free stock</h1>
        <p>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>
        </div>
       
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
      </div>
      <div className='after-banner'>
      <MdAddAPhoto className='icon-after' onClick={() => {setBackground("2022/11/19/14/26/nature-7602212_960_720.jpg")}}/>
      <BsBrushFill className='icon-after' onClick={() => {setBackground("2022/08/22/17/31/sea-7404152_960_720.png")}}/>
      <BsVectorPen className='icon-after' onClick={() => {setBackground("2019/07/08/04/23/traveling-4323759_960_720.png")}}/>
      </div>
      {results && (
          <div>
            <ResultsPage results={results}/>
          </div>
      )}
    </>
  )
}

export default Banner