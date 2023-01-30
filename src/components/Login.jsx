import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const Login = () => {
  const {user, signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = async () => {
    if(!user){
      await signInWithGoogle()
    }
    navigate('/');
  };

  return(
    <>
    <div className="d-flex flex-column">
     <button onClick={handleLogin} className="google-btn">Continue with Google</button>
    </div> 
    </>
  )
}