import axios from "axios";

import { createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import { BASE_URL } from "./Utils/Constants.js";
import Search from "./Pages/Search.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Deck from "./Pages/Deck.jsx";
import Logout from "./Pages/Logout.jsx";

export const UserContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/deck",
    element: <Deck />,
  },
  {
    path: "/profile",
    element: <>Profile</>,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}contactmsyt/verify`, {
        headers: {
          Authorization: `Berear ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
