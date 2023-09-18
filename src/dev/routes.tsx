import UserList from "../components/UserList";
import UserDetail from "../components/UserDetail";
import React from "react";

const routes = [
    { path: '/' , element: <UserList/> },
    { path: '/users/:id',  element: <UserDetail/> },
]

export default routes