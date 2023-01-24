import '../styles.css'
import {Form, Dropdown } from 'react-bootstrap';
import { useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getDataAction } from "../redux/actions"
import ResultsPage from "./ResultsComponents";
import {MdAddAPhoto} from 'react-icons/md'
import {BsBrushFill, BsImages} from 'react-icons/bs'
import {BsVectorPen} from 'react-icons/bs'

const Banner = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page] = useState(1);
  const [type, setType] = useState("All");
  const[background, setBackground] = useState("2023/01/10/08/48/water-7709322_960_720.jpg")
 
  useEffect(() => {
    dispatch(getDataAction("nature", 1, type))
  }, [dispatch, type]);

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
        <Dropdown.Item onClick={() => {setType("photo")}}>Photo</Dropdown.Item>
        <Dropdown.Item onClick={() => {setType("illustration")}}>Illustration</Dropdown.Item>
        <Dropdown.Item onClick={() => {setType("vector")}}>Vector</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </Form>
       </div>
      </div>
 

 
      <div className='after-banner'>
      <div className=' cursor d-flex align-items-center all-images' onClick={() => {setType("all"); setBackground("2023/01/10/08/48/water-7709322_960_720.jpg")}}>
        <BsImages className='icon-after mr-1 '/> All Images
       </div>
       <div className='cursor d-flex align-items-center' onClick={() => {setType("photo");setBackground("2022/11/19/14/26/nature-7602212_960_720.jpg")}}>
        <MdAddAPhoto className='icon-after'/> Photo
       </div>
       <div className='cursor d-flex align-items-center ' onClick={() => {setType("illustration"); setBackground("2019/08/31/22/19/landscape-4444133_960_720.jpg")}}>
       <BsBrushFill className='icon-after'/> Illustration
       </div> 
       <div className=' cursor d-flex align-items-center' onClick={() => {setType("vector"); setBackground("2016/05/24/16/48/mountains-1412683_960_720.png")}}>
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
      
    
      
    </>
  )
}

export default Banner