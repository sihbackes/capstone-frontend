import { getDatabase, onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { app  } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Link} from "react-router-dom";


 const Suggestions = () => {
  const {user} = useAuth()
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const db = getDatabase(app)
    onValue(ref(db, 'profile'), (snapshot) => {
      const data = snapshot.val()

      const getProfiles = data ?? {}
      const parsedProfiles = Object.entries(getProfiles).map(([key, value]) => {
        return{
         id: key,
         info: value.info
        }
      })
   
      
      if(user){
        const profiles = parsedProfiles.filter(element => element.info.id !== user.id)
        setInfo(profiles)
        console.log(info)
      } else if(!user){
        setInfo(parsedProfiles)
      }
    })
  }, [])

  return(
    <div className="suggested-div">
      <p>Interesting Profiles</p>
     {info.map(profile => (
      <Link key={profile.id} to={`/profile/${profile.info.id}`}>
       <div className="suggested-profiles">
         <img className="user-pic mr-2" src={profile.info.avatar} alt="" />
         <p>{profile.info.name}</p>
       </div>
      </Link>
     ))}
    </div>
  )
 }

 export default Suggestions