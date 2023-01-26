import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const LoginPage = () =>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
  <>
  <button className="join-btn" onClick={handleShow}>Join</button>
  <Modal show={show} onHide={handleClose}>
    <div>
     <Tabs
      defaultActiveKey="signup"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="signup" title="Sign up">
      <div className='modal-title'>
         <h1>Sign Up</h1>
       </div>
       <div className='form-modal'>
         <form>
         <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">First Name</label>
             <input type="name" class="form-control" id="exampleInputName" aria-describedby="name"/>
           </div>
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           </div>
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div>
           <button type="submit" class="btn btn-primary" onClick={handleClose}>Submit</button>
         </form>
       </div>
      </Tab>
      <Tab eventKey="login" title="Log in">
       <div className='modal-title'>
         <h1>Log in</h1>
       </div>
       <div className='form-modal'>
         <form>
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           </div>
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div>
           <button type="submit" class="btn btn-primary" onClick={handleClose}>Submit</button>
         </form>
       </div> 
      </Tab>
     </Tabs>
    
    </div>
 
  </Modal>
  </>
)
}

export default LoginPage

