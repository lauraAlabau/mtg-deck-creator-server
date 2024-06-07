

import GradientCircle from "../Components/GradientCircle.jsx";
import Navbar from "../Components/Navbar.jsx";

import "../assets/css/deck.css";

const Deck = () => {

  return (
    <>
      <Navbar />
      <GradientCircle
        size={"large"}
        color={"violet"}
        alignItems={"align-start"}
        justifyContent={"justify-center"}
      />

      <GradientCircle
        size={"medium"}
        color={"violet"}
        alignItems={"align-center"}
        justifyContent={"justify-end"}
      />
      <GradientCircle
        size={"small"}
        color={"violet"}
        alignItems={"align-end"}
        justifyContent={"justify-center"}
      />
      <div className="deck-bg"></div>
      <main className="view-container">
        <div className="box-container">
          <div className="deck-container">Deck</div>
          <div className="side-container">Sideboard</div>
        </div>
      </main>
    </>
  );
};

export default Deck;
