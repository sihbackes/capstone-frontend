import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

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
    <Button className='btn-join-google' onClick={handleLogin}>Continue with Google</Button>
    </>
  )
}