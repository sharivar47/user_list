import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UserController from "../dev/controllers/UserController";

const UserDetail = () => {
   const params = useParams()
   const [user, setUser] = useState({})
   useEffect(() => {
      getUser()
   }, [])
   const getUser = async () => {
      const result = await UserController.getUser(params.id as string)
      if (result.succeeded) {
         setUser(result.data)
      }
   }
   return(<div className="container">
      <div className="card">
         <span><img src={user.avatar} /></span>
         <div className="card-body">
            <span className="card-title">{user.first_name}</span>
            <span className="card-title">{user.last_name}</span>
            <span className="card-title">{user.email}</span>
         </div>
      </div>
   </div>)
}
export default UserDetail