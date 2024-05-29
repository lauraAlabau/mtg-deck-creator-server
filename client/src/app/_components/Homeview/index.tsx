import Link from "next/link";
import React from "react";
import "./styles.css";
import { LoginSigninBtn } from "..";

export const Homeview = () => {
  return (
    <main className="home-container">
      <div className="right-side">
        <div className="greeting-container">
          <p className="greeting-title">
            Welcome to <br />
            MTG DECK CREATOR
          </p>
          <p className="greeting-summary">
            Search cards, add them to favorites, create a deck and print it to
            be ready for your next tournament.
          </p>

          <div>
            <LoginSigninBtn buttonType={"login"} />
          </div>
          <div className="divider">
            <div className="line"></div>
            <p>Or</p>
            <div className="line"></div>
          </div>
          <div>
            <LoginSigninBtn buttonType={"signin"} />
          </div>
        </div>
      </div>
    </main>
  );
};
