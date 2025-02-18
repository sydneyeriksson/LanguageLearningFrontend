import contentReturnBookshelfCat from "../images/contentReturnCat.png";
import happyReturnBookshelfCat from "../images/happyReturnCat.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/FlashCards.css";

function FlashCards() {
  const navigate = useNavigate(); // Hook for navigation

  // Show the first card from the deck in the original language, and content cat
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentCat, setCurrentCat] = useState(contentReturnBookshelfCat);

  // Get the word list from the home page
  const location = useLocation();
  const mistakeList = location.state?.mistakeList || [];

  // Reload the page when the index or mistakeList changes
  useEffect(() => {}, [index]);

  const removeWord = () => {
    const currentIndex = index;

    // If on the last card of the deck switch to the first card
    if (index === mistakeList.length - 1) {
      setIndex(0);
    }

    // Remove 1 item at the specified index
    mistakeList.splice(currentIndex, 1);

    // Make the cat happy for 2 seconds
    setCurrentCat(happyReturnBookshelfCat);
    setTimeout(function () {
      setCurrentCat(contentReturnBookshelfCat);
    }, 2000);
  };

  const handlePreviousCard = () => {
    // If current card is not the first card, go to the previous card, otherwise go to last card in deck
    setIndex(
      (prevIndex) => (prevIndex - 1 + mistakeList.length) % mistakeList.length
    );
  };

  const handleNextCard = () => {
    // If current card is not the last card, go to the next card, otherwise go to first card in deck
    setIndex((prevIndex) => (prevIndex + 1) % mistakeList.length);
  };

  const handleFlipCard = () => {
    setShowTranslation(!showTranslation);
  };

  const handleReturnToShelf = () => {
    navigate("/", {
      state: { mistakeList: mistakeList },
    }); // Navigate to the book shelf
  };

  const currentCard = mistakeList[index];

  return (
    <div class="background">
      <div class="catChair"></div>
      <img
        class="contentReturnBookshelfCat"
        src={mistakeList.length < 1 ? happyReturnBookshelfCat : currentCat}
        onClick={handleReturnToShelf}
        alt=""
      />
      {mistakeList.length < 1 ? (
        <div class="flashCard">All Done!</div>
      ) : (
        <div class="flashCardButtonsContainer">
          <div className="flashCard" onClick={handleFlipCard}>
            {/* {mistakeList.length < 1
              ? "All Done!"
              : showTranslation
              ? currentCard.translation
              : currentCard.word} */}
            {showTranslation ? currentCard.translation : currentCard.word}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div class="changeCardButton" onClick={() => handlePreviousCard()}>
              {/* left arrow */}
              &#x2190;
            </div>
            <div class="changeCardButton" onClick={() => handleNextCard()}>
              {/* right arrow */}
              &#x2192;
            </div>
          </div>
          <div class="changeCardButton" onClick={() => removeWord()}>
            Memorized!
          </div>
        </div>
      )}
    </div>
  );
}
export default FlashCards;
