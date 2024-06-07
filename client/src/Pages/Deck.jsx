

import GradientCircle from "../Components/GradientCircle.jsx";
import Navbar from "../Components/Navbar.jsx";



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
      {/* <div className="bg"></div> */}
      <main className="view-container">
        WIP Deck
      </main>
    </>
  );
};

export default Deck;
