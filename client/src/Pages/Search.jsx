import { useState } from "react";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiCards } from "react-icons/pi";

import GradientCircle from "../Components/GradientCircle";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";

import "../assets/css/search.css";
import { getCardSearch } from "../services/useCardsApi.js";

const Search = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [includeUniques, setIncludeUniques] = useState(false);

  const handleSearch = async () => {
    try {
      const data = await getCardSearch(searchTerm, includeUniques);
      setCards(data.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <>
      <Navbar />
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIncludeUniques={setIncludeUniques}
      />
      <GradientCircle
        size={"large"}
        color={"green"}
        alignItems={"align-start"}
        justifyContent={"justify-center"}
      />

      <GradientCircle
        size={"medium"}
        color={"green"}
        alignItems={"align-center"}
        justifyContent={"justify-end"}
      />
      <GradientCircle
        size={"small"}
        color={"green"}
        alignItems={"align-end"}
        justifyContent={"justify-center"}
      />
      <div className="bg"></div>
      <main className="view-container">
        <div className="main-container">
          <div className="flex-container">
            {cards.map((card) => (
              <div key={card.id} className="image-container">
                {card.image_uris?.png && (
                  <>
                    <img
                      src={card.image_uris.png}
                      alt={card.name}
                      className="image"
                    />
                    <div className="btn-actions">
                      <div className="tooltip">
                        <button className="btn fav" onClick={() => console.log('Will be add to Favs', card)}>
                          <MdOutlineFavoriteBorder />
                        </button>
                        <span className="tooltiptext fav">Add to Favorites</span>
                      </div>
                      <div className="tooltip">
                        <button className="btn deck" onClick={() => console.log('Will be add to Deck', card)}>
                          <PiCards />
                        </button>
                        <span className="tooltiptext deck">Add to Deck</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;
