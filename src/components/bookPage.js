import React from "react";
import WordButton from "../components/WordButton";
import PageTurn from "../images/PageTurn.png";
import PageTurnDarkMode from "../images/PageTurnDarkMode.png";

const BookPage = ({
  page,
  incrementPage,
  decrementPage,
  updateMistakeList,
  darkMode,
}) => {
  return (
    <div class="pageContainer">
      <div class="page">
        {page.length > 1 ? (
          page.map((item, index) => (
            <WordButton
              initialWord={item}
              id={index}
              updateMistakeList={updateMistakeList}
            />
          ))
        ) : (
          <WordButton
            initialWord={"Loading ..."}
            id={1}
            updateMistakeList={updateMistakeList}
          />
        )}
        <div style={{ width: "100%", height: 50 }}></div>
      </div>
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
    </div>
  );
};

export default BookPage; // Export the component
