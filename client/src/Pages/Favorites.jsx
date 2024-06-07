

import GradientCircle from "../Components/GradientCircle.jsx";
import Navbar from "../Components/Navbar.jsx";



const Favorites = () => {


  return (
    <>
      <Navbar />
      <GradientCircle
        size={"large"}
        color={"cyan"}
        alignItems={"align-start"}
        justifyContent={"justify-center"}
      />

      <GradientCircle
        size={"medium"}
        color={"cyan"}
        alignItems={"align-center"}
        justifyContent={"justify-end"}
      />
      <GradientCircle
        size={"small"}
        color={"cyan"}
        alignItems={"align-end"}
        justifyContent={"justify-center"}
      />
      {/* <div className="bg"></div> */}
      <main className="view-container">
        WIP Favorites
      </main>
    </>
  );
};

export default Favorites;
