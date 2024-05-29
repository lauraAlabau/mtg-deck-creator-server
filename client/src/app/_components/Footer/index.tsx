import Link from "next/link";
import "./styles.css";

import {
  FaArrowRightFromBracket,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="footer-container">
      <Link href="http://www.laura-alabau.com/" passHref={true} target="_blank">
        Laura Alabau
      </Link>
      <div className="footer-links">
        <Link
          href="https://www.linkedin.com/in/laura-alabau-rodriguez"
          passHref={true}
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/lauraAlabau"
          passHref={true}
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};
