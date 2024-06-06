import axios from "axios";

import { createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

import { BASE_URL } from "./Utils/Constants.js";

export const UserContext = createContext(null);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },

])

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    axios
      .get(`${BASE_URL}contactmsyt/verify`, {
        headers: {
          Authorization: `Berear ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user)
        }
      }).catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  )
}

export default App