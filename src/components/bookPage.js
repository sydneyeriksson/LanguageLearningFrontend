import React from "react";
import WordButton from "../components/WordButton";
import Paragraph from "../components/Paragraph";
import PageTurn from "../images/PageTurn.png";
import PageTurnDarkMode from "../images/PageTurnDarkMode.png";

const BookPage = ({
  page,
  incrementPage,
  decrementPage,
  updateMistakeList,
  darkMode,
  language,
}) => {
  return (
    <div class="pageContainer">
      <div class="page">
        {page.length > 1 ? (
          page.map((item, index) => (
            <Paragraph
              initialWord={item}
              id={index}
              updateMistakeList={updateMistakeList}
              language={language}
            />
          ))
        ) : (
          <WordButton
            initialWord={"Loading ..."}
            id={1}
            updateMistakeList={updateMistakeList}
          />
        )}
        <div class="footer">
          <div class="PageTurn" onClick={() => decrementPage()}>
            &#x2190;
          </div>
          <div class="PageTurn" onClick={() => incrementPage()}>
            &#x2192;
          </div>
        </div>
      </div>
      {/* <div class="noDisplayOnMedia">
        <div class="PageTurnLeftContainer">
          <div class="PageBeneathLeft"></div>
          <img
            class="PageTurnLeft"
            src={darkMode == "light" ? PageTurn : PageTurnDarkMode}
            alt="PageTurnLeft"
            onClick={() => decrementPage()}
          />
        </div>
        <div class="PageTurnContainer">
          <div class="PageBeneath"></div>
          <img
            class="PageTurn"
            src={darkMode == "light" ? PageTurn : PageTurnDarkMode}
            alt="PageTurn"
            onClick={() => incrementPage()}
          />
        </div>
      </div> */}
    </div>
  );
};

export default BookPage; // Export the component
