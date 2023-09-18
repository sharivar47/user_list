import UserController from "../dev/controllers/UserController";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        const result = await UserController.getUsers()
        if (result.succeeded) {
            setUsers(result.data)
        }
    }
    return (<div className="container">
        <table className="table">
            <thead>
            <tr>
                <td>id</td>
                <td>name</td>
            </tr>
            </thead>
            <tbody>
            {
                users.map((item: any) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/users/${item.id}`}>{`${item.first_name} ${item.last_name}`}</Link></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>)
}
export default UserList