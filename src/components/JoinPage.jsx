import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Login } from './Login';
import { SignUp } from './SignUp';

const JoinPage = () => {
  

return(
  <div className='d-flex justify-content-center mt-5'>

    <div className='join-main'>
     <Tabs defaultActiveKey="signup" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="signup" title="Sign up">
      <div className='join-title'>
         <h1>Sign Up</h1>
       </div>
       <SignUp/>
      </Tab>
      <Tab eventKey="login" title="Log in">
       <div className='join-title'>
         <h1>Log in</h1>
       </div>
        <Login/>
      </Tab>
     </Tabs>
    </div>
  </div>
)
}

export default JoinPage

