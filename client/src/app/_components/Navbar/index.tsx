/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./styles.css";

import { FaArrowRightFromBracket } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <Link href="/">
          <img
            alt="logo"
            src="https://utfs.io/f/c41b25e1-91e1-49bd-bdf1-44f19f610f49-1evuz.webp"
          />
        </Link>
        <div className="nav-pages">
          <Link href="/search">Search</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/deck">Deck</Link>
        </div>
      </div>
      <button className="nav-btn ">
        Logout <FaArrowRightFromBracket />
      </button>
    </nav>
  );
};
