import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions";
import "../styles.css"
import NavSearchBar from "./NavSearchBar";
import ResultsComponent from "./ResultsComponents";
import { HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi';


const ResultsNavBar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.query.dataImages)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("All");
 

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

  return (
    <> 
    <NavSearchBar/>
    
    {results && (
        <div>
        <ResultsComponent results={results}/>
      </div>
    )}
    <div className="buttons-div">
    <button className="button-page" onClick={handleBackButton} disabled={page===1}>{<HiArrowNarrowLeft size={22}/>}</button>
    <button className="button-page" onClick={handleNextButton}>{<HiArrowNarrowRight size={22}/>}</button>
    </div>
    
</>
  );
}

export default ResultsNavBar