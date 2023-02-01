import Footer from "./FooterComponent"
import NavSearchBar from "./NavSearchBar"
import {BsPencilSquare} from 'react-icons/bs'
import { useAuth } from '../hooks/useAuth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Profile = () => {
  const {user} = useAuth()
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleEditAbout(e){
    e.preventDefault();
  }
  return(
    <>
      <NavSearchBar/>
      <div className="container mt-5">
       <div className="row">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
           <div>
            <img className="user-profile-avatar" src={user.avatar} alt=""/>
           </div>
           <div className="user-profile-name">{user.name}</div>
          </div>
          <div className="about-me">
          <div onClick={handleShow}><BsPencilSquare/></div>
          <p>
         {about}
          </p>
         
          </div>
        </div>
        <div className="col-md-6">
          <h3>Favourites Board</h3>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-4">
              <img 
                src="https://via.placeholder.com/150" 
                alt=""
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
       </div>
    </div>
      <Footer/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <form onSubmit={handleEditAbout}>
          <div className="form-group">
           <label htmlFor="comment">About Me</label>
            <textarea
              className="form-control about-form"
              id="about"
              rows="3"
              placeholder="Write something nice about you..."
              onChange={(event) => setAbout(event.target.value)}
              value={about}
              ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Profile