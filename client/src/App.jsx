
import Home from './Pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

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
      <RouterProvider router={router} />
    </>
  )
}

export default App