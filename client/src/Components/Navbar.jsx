
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            alt="logo"
            src="https://utfs.io/f/c41b25e1-91e1-49bd-bdf1-44f19f610f49-1evuz.webp"
          />
        </Link>

        <div className="navbar-pages">
          <Link to="/search" className="navbar-link">Search</Link>
          <Link to="/favorites" className="navbar-link">Favorites</Link>
          <Link to="/deck" className="navbar-link">Deck</Link>
        </div>

      </div>

      <button className="navbar-right">
        Logout <FaArrowRightFromBracket />
      </button>

    </nav>
  );
};

export default Navbar