import {Link } from "react-router-dom";
import "../styles.css"

const Logout = () => {

  return(
    <div className="logout-main-page">
        <div>
          <h1>See you later!</h1>
          <Link to={"/"}>
           <button className="join-btn-submit" >Home</button>
          </Link>
          
        </div>
    </div>
      

  )
}

export default Logout