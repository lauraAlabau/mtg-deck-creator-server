/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./styles.css";

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { UserContext } from "../../_contexts/UserContext";
import { useContext } from "react";
export const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log("context", user);
  return (
    <nav className="nav-container">
      <div className="nav">
        <Link href="/">
          <img
            alt="logo"
            src="https://utfs.io/f/c41b25e1-91e1-49bd-bdf1-44f19f610f49-1evuz.webp"
          />
        </Link>
        {user && (
          <div className="nav-pages">
            <Link href="/search">Search</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/deck">Deck</Link>
          </div>
        )}
      </div>
      {user && (
        <button className="nav-btn ">
          Logout <FaArrowRightFromBracket />
        </button>
      )}
    </nav>
  );
};
