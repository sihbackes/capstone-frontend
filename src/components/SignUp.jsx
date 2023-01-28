import { useState } from "react"

export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
       type="email"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
     />
      <input 
       className="input-join"
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
     />
      <button type="submit" className="join-btn-submit">Submit</button>
    </form> 
    </>
  )
}