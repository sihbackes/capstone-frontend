import Footer from './FooterComponent';
import { Login } from './Login';
import NavSearchBar from "./NavSearchBar";
const JoinPage = () => {
  
return(
  <>
  <NavSearchBar/>
    <div className="d-flex align-items-center login-div">
     <div className='login-text'>
       <h3 className="text-center join-title mb-4">Join</h3>
       <div className="d-flex justify-content-center">
         <Login/>
       </div>
     </div>
    </div>
    <Footer/>
  </>

)


}

export default JoinPage

