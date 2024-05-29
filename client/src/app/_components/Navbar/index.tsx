import Link from "next/link";
import "./styles.css";

import { FaArrowRightFromBracket } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <Link href="/" className="nav-link">
          <img
            alt="logo"
            src="https://utfs.io/f/c41b25e1-91e1-49bd-bdf1-44f19f610f49-1evuz.webp"
          />
        </Link>
        <div className="nav-pages">
          <Link href="/search" className="nav-link">
            Search
          </Link>
          <Link href="/favorites" className="nav-link">
            Favorites
          </Link>
          <Link href="/deck" className="nav-link">
            Deck
          </Link>
        </div>
      </div>
      <button className="nav-btn nav-link">
        Logout <FaArrowRightFromBracket />
      </button>
    </nav>
  );
};
