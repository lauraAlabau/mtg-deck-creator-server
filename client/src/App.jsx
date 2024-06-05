
import Home from './Pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'

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
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App