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
       <div className='cursor d-flex align-items-center m-3' onClick={() => {setType("Photo");setBackground("2022/11/19/14/26/nature-7602212_960_720.jpg")}}>
        <MdAddAPhoto className='icon-after'/> Photo
       </div>
       <div className='cursor d-flex align-items-center m-3' onClick={() => {setType("Illustration"); setBackground("2019/08/31/22/19/landscape-4444133_960_720.jpg")}}>
       <BsBrushFill className='icon-after'/> Illustration
       </div> 
       <div className=' cursor d-flex align-items-center m-3' onClick={() => {setType("Vector"); setBackground("2016/05/24/16/48/mountains-1412683_960_720.png")}}>
       <BsVectorPen className='icon-after'/>Vector
       </div>
      
      </div>
      <div className='results'>
      {results && (
          <div>
            <ResultsPage results={results}/>
          </div>
      )}

      </div>
      
      <div className='mask'>
       <div className='white-mask'></div>
      </div>
      
    </>
  )
}

export default Banner