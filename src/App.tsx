import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React, { Suspense } from 'react'
import Layout from "./components/Layout";
import Login from "./components/Login";
import {useSelector} from "react-redux";
import {selectAuthToken} from "./dev/redux/AuthSlice";

function App() {
  const loading = (
      <div className="pt-3 text-center">
          loading...
      </div>
  )
    const t = useSelector(selectAuthToken)
    const isLogin = t !== ""
  return (
    <div className="App">
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route  path="/login"  element={!isLogin ? <Login /> : <Navigate to="/" replace />} />
              <Route path="*"  element={isLogin ? <Layout /> : <Navigate to="/login" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

    </div>
  );
}

export default App;
