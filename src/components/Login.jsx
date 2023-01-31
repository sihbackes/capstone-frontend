import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const {user, signInWithGoogle} = useAuth()
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