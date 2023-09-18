import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from "../dev/routes";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthToken, setAuthToken} from "../dev/redux/AuthSlice";
const Layout = () => {
    const loading = (
        <div className="pt-3 text-center">
            loading...
        </div>
    )
    const isLogin = useSelector(selectAuthToken) !== ""
    const dispatch = useDispatch()
    const logout = () => {
       dispatch(setAuthToken(""))
    }
  return (
      <div>
          <div className="p-5 pt-1">
              {
                  isLogin ? <button className="btn btn-danger" onClick={() => logout()}>logout</button> : ""
              }
          </div>
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                  route.element && (
                      <Route
                          key={idx}
                          path={route.path}
                          element={route.element}
                      />
                  )
              )
            })}
          </Routes>
        </Suspense>
      </div>
  )
}
export default Layout