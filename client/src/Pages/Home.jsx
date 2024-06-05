
import '../assets/css/home.css'
import LoginSigninBtn from '../Components/LoginSigninBtn'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">

        <div className="home-container">
          <p className="home-title">
            Welcome to <br />
            MTG DECK CREATOR
          </p>
          <p className="home-summary">
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
    </>
  )
}

export default Home