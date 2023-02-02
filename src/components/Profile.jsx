import Footer from "./FooterComponent"
import NavSearchBar from "./NavSearchBar"
import {BsPencilSquare} from 'react-icons/bs'
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { getDatabase, onValue, set, ref } from "firebase/database";
import { app  } from '../services/firebase';
import { useParams} from "react-router-dom";


const Profile = () => {
  const {user} = useAuth()
  const params = useParams();
  let id = params.id
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState('');
  const handleClose = () => setShow(false);///modal
  const handleShow = () => setShow(true);///modal
  
  useEffect(() => {
  const db = getDatabase(app)
  onValue(ref(db, `profile/${id}`), (snapshot) =>{
    const data = snapshot.val();
    const getAbout = data.about ?? {}
    setAbout(getAbout.about)
    console.log(data)
 
  })
  },[id])

  async function handleEditAbout(e){
    e.preventDefault();
    const aboutMe = {
      about: about
    }
    const db = getDatabase(app)
    await set(ref(db,`profile/${id}/about`), aboutMe)
    
  }

   //wait the user info
   if(!user){
    return <div>Loading</div>
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