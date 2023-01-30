import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginAction } from "../redux/actions"
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const logged = useSelector((state) => state.logged.user)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  
  return(
    <>
    <form className="d-flex flex-column">
     <input 
       className="input-join"
       type="name"
       placeholder="Name"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
      <input 
       className="input-join"
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
     />
      <button onClick={() => {dispatch(loginAction(name)); navigate("/")}}className="join-btn-submit">Submit</button>
    </form> 
    </>
  )
}