import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from '../pages/PrivateRoute';
import FourOFour from '../pages/FourOFour';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='*' element={<FourOFour />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes