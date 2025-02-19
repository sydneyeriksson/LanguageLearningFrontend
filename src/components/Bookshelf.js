import catWithYarn from "../images/CatWithYarn.gif";
import DarkModeCatWithString from "../images/DarkModeCatWithString.gif";
import PurpleCatMoving from "../images/PurpleCatMoving.gif";
import DarkModePurpleCat from "../images/DarkModePurpleCat.gif";

const Bookshelf = ({ handleClickBook, darkMode }) => {
  return (
    <div class="bookshelf" style={{ fontSize: 15, font: "Georgia" }}>
      {/* Top Shelf */}
      <div class="shelf">
        <div class="book-stack">
          <div
            class="book"
            style={{ backgroundColor: "var(--light)", width: "95%" }}
            onClick={() => handleClickBook("Alice in Wonderland.txt")}
          >
            <i>Alice in Wonderland</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "87%" }}
            onClick={() => handleClickBook("Peter Pan.txt")}
          >
            <i>Peter Pan</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--bright)", width: "95%" }}
            onClick={() => handleClickBook("Anne of Green Gables.txt")}
          >
            <i>Anne of Green Gables</i>
          </div>
        </div>
        <div class="book-stack-right">
          <div
            class="upright-book"
            style={{
              backgroundColor: "var(--light)",
              height: "60%",
              marginRight: "18px",
              transform: "rotate(20deg)",
            }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--dusty)", height: "80%" }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--bright)", height: "70%" }}
          ></div>
        </div>
      </div>
      <div class="shelf-wood"></div>
      {/* Shelf 2*/}
      <div class="shelf">
        <div class="book-stack"></div>
        <div class="book-stack">
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "80%" }}
            onClick={() => handleClickBook("Frankenstein.txt")}
          >
            <i>Frankenstein</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--bright)", width: "90%" }}
            onClick={() => handleClickBook("Little Women.txt")}
          >
            <i>Little Women</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--light)", width: "87%" }}
            onClick={() => handleClickBook("Pride and Prejudice.txt")}
          >
            <i>Pride and Prejudice</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "95%" }}
            onClick={() => handleClickBook("Winnie-the-Pooh.txt")}
          >
            <i>Winnie-the-Pooh</i>
          </div>
        </div>
        <img
          class="cat"
          src={darkMode == "light" ? PurpleCatMoving : DarkModePurpleCat}
          alt="PurpleCatMoving"
        />
      </div>
      <div class="shelf-wood" style={{ zIndex: 2 }}></div>
      {/* Shelf 3*/}
      <div class="shelf">
        <div class="book-stack-right" style={{ justifyContent: "flex-start" }}>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--bright)", height: "80%" }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--dusty)", height: "70%" }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--light)", height: "90%" }}
          ></div>
          <div
            class="upright-book"
            style={{
              backgroundColor: "var(--dusty)",
              height: "80%",
              marginLeft: "12px",
              transform: "rotate(-10deg)",
            }}
          ></div>
        </div>
        <div class="book-stack">
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "75%" }}
          >
            <i>Dracula</i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--bright)", width: "86%" }}
          >
            <i>Huckleberry Finn</i>
          </div>
        </div>
        <div class="invisibleStack">
          <div
            class="book"
            style={{ width: "75%" }}
            onClick={() => handleClickBook("Dracula.txt")}
          ></div>
          <div
            class="book"
            style={{ width: "86%" }}
            onClick={() => handleClickBook("Huckleberry Finn.txt")}
          ></div>
        </div>
        <img
          class="yarnBallCat"
          src={darkMode == "light" ? catWithYarn : DarkModeCatWithString}
          alt="catWithYarn"
          style={{ zIndex: 1 }}
        />
      </div>
      <div class="shelf-wood"></div>
      {/* Shelf 4*/}
      <div class="shelf">
        <div class="book-stack">
          <div
            class="book"
            style={{ backgroundColor: "var(--light)", width: "85%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--bright)", width: "95%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "96%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
        </div>
        <div class="book-stack">
          {/* <img class="catLookingUp" src={catLookingUp} alt="Purple Cat" /> */}
        </div>
      </div>
      <div class="shelf-wood" style={{ zIndex: 2 }}></div>
      {/* Shelf 5*/}
      <div class="shelf">
        <div class="book-stack">
          <div
            class="book"
            style={{ backgroundColor: "var(--light)", width: "60%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "80%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--bright)", width: "80%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
          <div
            class="book"
            style={{ backgroundColor: "var(--dusty)", width: "90%" }}
            onClick={() => handleClickBook("")}
          >
            <i></i>
          </div>
        </div>
        <div class="book-stack-right">
          <div
            class="upright-book"
            style={{
              backgroundColor: "var(--light)",
              height: "60%",
              marginRight: "18px",
              transform: "rotate(20deg)",
            }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--dusty)", height: "70%" }}
          ></div>
          <div
            class="upright-book"
            style={{ backgroundColor: "var(--light)", height: "80%" }}
          ></div>
        </div>
      </div>
      <div class="shelf-wood" style={{ height: 2 }}></div>
    </div>
  );
};

export default Bookshelf; // Export the component
