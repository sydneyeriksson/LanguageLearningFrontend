import React, { useState, useEffect, setPage, useRef } from "react";
import axios from "axios";
import catWithYarn from "../images/CatWithYarn.gif";
import DarkModeCatWithString from "../images/DarkModeCatWithString.gif";
import PurpleCatMoving from "../images/PurpleCatMoving.gif";
import DarkModePurpleCat from "../images/DarkModePurpleCat.gif";
import BookPage from "../components/bookPage";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/index.css";

function Home() {
  // Get the word list from the home page
  // const location = useLocation();
  // const wordList = location.state?.mistakeList || [];
  const [title, setTitle] = useState("Alice in Wonderland.txt");
  const [pageNum, setPageNum] = useState(1);
  const [language, setLanguage] = useState("english");
  const [difficulty, setDifficulty] = useState("Hard");
  const [textSize, setTextSize] = useState("medium");
  const [font, setFont] = useState("Times New Roman");
  const [darkMode, setDarkMode] = useState("light");
  document.documentElement.setAttribute("darkMode", darkMode);

  const mistakeList = useRef([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const [page, setPage] = useState([]);
  const location = useLocation();
  const [reloaded, setReloaded] = useState(true);

  // Get previous settings on reload
  if (reloaded) {
    const savedTitle = sessionStorage.getItem("title");
    const savedDifficulty = sessionStorage.getItem("difficulty");
    const savedPageNum = sessionStorage.getItem("pageNum");
    const savedLanguage = sessionStorage.getItem("language");
    const savedTextSize = sessionStorage.getItem("textSize");
    const savedFont = sessionStorage.getItem("font");
    const savedDarkMode = sessionStorage.getItem("darkMode");
    const savedPage = sessionStorage.getItem("page");

    if (savedTitle) setTitle(String(savedTitle));
    if (savedDifficulty) setDifficulty(String(savedDifficulty));
    if (savedPageNum) setPageNum(Number(savedPageNum));
    if (savedLanguage) setLanguage(String(savedLanguage));
    if (savedTextSize) setTextSize(String(savedTextSize));
    if (savedFont) setFont(String(savedFont));
    if (savedDarkMode) setDarkMode(String(savedDarkMode));
    if (savedPage) setPage(Array(savedPage));
    document.documentElement.setAttribute("darkMode", darkMode);
    setReloaded(false);
  }

  useEffect(() => {
    sessionStorage.setItem("textSize", textSize);
    sessionStorage.setItem("font", font);
    sessionStorage.setItem("darkMode", darkMode);
  }, [textSize, font, darkMode]);

  // Get the new page from the server
  useEffect(() => {
    if (location.state?.mistakeList) {
      mistakeList.current = location.state.mistakeList;
    }
    setPage([]);
    // if (location.state?.mistakeList) {
    //   mistakeList.current = location.state.mistakeList;
    // }

    axios
      .get("https://languagelearningbackend.onrender.com/book", {
        params: {
          pageNum: pageNum,
          title: title,
          difficulty: difficulty,
          language: language,
        },
      })
      .then((response) => {
        setPage(response.data.page);
      })
      .catch((error) => {
        console.error("There was an error fetching the page!", error);
      });
    // Save settings
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("difficulty", difficulty);
    sessionStorage.setItem("pageNum", pageNum);
    sessionStorage.setItem("language", language);
    sessionStorage.setItem("textSize", textSize);
    sessionStorage.setItem("font", font);
    sessionStorage.setItem("darkMode", darkMode);
    sessionStorage.setItem("page", page);
  }, [title, pageNum, language, difficulty]);


  const updateMistakeList = (mistake) => {
    mistakeList.current.push(mistake);
  };

  const handleClickBook = (newTitle) => {
    setTitle(newTitle);
  };

  const handleNextPage = (newPageNum) => {
    setPageNum(newPageNum);
  };

  const incrementPage = () => {
    setPageNum((prevPageNum) => {
      const newPageNum = Math.min(prevPageNum + 1, 1000); // Increment but limit to 1000
      handleNextPage(newPageNum); // Ensure the function is called with the updated page number
      return newPageNum;
    });
  };

  const decrementPage = () => {
    setPageNum((prevPageNum) => {
      const newPageNum = Math.max(prevPageNum - 1, 1); // Decrement but limit to 1
      handleNextPage(newPageNum); // Ensure the function is called with the updated page number
      return newPageNum;
    });
  };

  const handleGoToPage = (e) => {
    setPageNum(e.target.value);
  };

  const handleBlur = () => {
    // When the input loses focus, enforce the bounds (1 to 1000)
    const validPageNum = Math.max(1, Math.min(1000, pageNum));
    setPageNum(validPageNum);
    handleNextPage(validPageNum); // Update the page number if needed
  };

  const handleGoToFlashCards = () => {
    // Make sure mistake list is updated
    setReload(!reload);

    // Go to the flash cards page
    navigate("/flash-cards", {
      state: { mistakeList: mistakeList.current },
    });
  };

  return (
    <div class="container" style={{ fontFamily: font }}>
      {/* Header */}
      <header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            border: "1px solid var(--borders)",
            margin: 0,
            padding: 0,
            backgroundColor: "var(--light)",
          }}
        >
          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "xx-large",
              width: "25%",
              justifyContent: "center",
            }}
          >
            <div style={{}}>{title.slice(0, -4)}</div>
          </div>
          {/* Settings Portion of the Header */}
          <div class="headerButtonContainer">
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            > */}
            {/* Difficulty selection component */}
            {/* <select
                name="difficulty"
                id="difficulty"
                style={{
                  display: "flex",
                  backgroundColor: "var(--light)",
                  padding: 13,
                  flexDirection: "row",
                  fontSize: "20px",
                  fontWeight: "normal",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  margin: 10,
                }}
                value={difficulty}
                onChange={() =>
                  setDifficulty(document.getElementById("difficulty").value)
                }
              >
                <option value="Easy">Easy</option>
                <option value="Hard">Hard</option>
              </select> */}
            {/* </div> */}
            <div>
              {/* Dark Mode selection component */}
              <select
                name="darkMode"
                id="darkMode"
                value={darkMode}
                onChange={() =>
                  setDarkMode(document.getElementById("darkMode").value)
                }
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
              </select>
            </div>
            <div>
              {/* Font selection component */}
              <select
                name="font"
                id="font"
                value={font}
                onChange={() => setFont(document.getElementById("font").value)}
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
              </select>
            </div>
            <div>
              {/* Text Size selection component */}
              <select
                name="textSize"
                id="textSize"
                value={textSize}
                onChange={() =>
                  setTextSize(document.getElementById("textSize").value)
                }
              >
                <option value="small">Small Font</option>
                <option value="medium">Medium Font</option>
                <option value="large">Large Font</option>
                <option value="x-large">X-large Font</option>
                <option value="xx-large">XX-large Font</option>
                <option value="xxx-large">XXX-large Font</option>
              </select>
            </div>
            {/* Language selection component */}
            <div>
              <select
                name="language"
                id="language"
                value={language}
                onChange={() =>
                  setLanguage(document.getElementById("language").value)
                }
              >
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
                <option value="chinese (simplified)">Chinese</option>
                <option value="croatian">Croatian</option>
                <option value="czech">Czech</option>
                <option value="dutch">Dutch</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="greek">Greek</option>
                <option value="hawaiian">Hawaiian</option>
                <option value="hebrew">Hebrew</option>
                <option value="hindi">Hindi</option>
                <option value="hmong">Hmong</option>
                <option value="hungarian">Hungarian</option>
                <option value="icelandic">Icelandic</option>
                <option value="indonesian">Indonesian</option>
                <option value="irish">Irish</option>
                <option value="italian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="lao">Lao</option>
                <option value="latvian">Latvian</option>
                <option value="luxembourgish">Luxembourgish</option>
                <option value="persian">Persian</option>
                <option value="portuguese">Portuguese</option>
                <option value="punjabi">Punjabi</option>
                <option value="romanian">Romanian</option>
                <option value="russian">Russian</option>
                <option value="samoan">Samoan</option>
                <option value="serbian">Serbian</option>
                <option value="slovenian">Slovenian</option>
                <option value="spanish">Spanish</option>
                <option value="sundanese">Sundanese</option>
                <option value="swahili">Swahili</option>
                <option value="swedish">Swedish</option>
                <option value="thai">Thai</option>
                <option value="turkish">Turkish</option>
                <option value="ukrainian">Ukrainian</option>
                <option value="urdu">Urdu</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="welsh">Welsh</option>
                <option value="xhosa">Xhosa</option>
                <option value="yiddish">Yiddish</option>
              </select>
            </div>
            {/* Page selection component */}
            <div
              class="headerButtons"
              // style={{
              //   display: "flex",
              //   backgroundColor: "var(--light)",
              //   padding: 13,
              //   flexDirection: "row",
              //   fontSize: "20px",
              //   fontWeight: "normal",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   borderRadius: "10px",
              //   margin: 10,
              // }}
            >
              <div style={{ paddingRight: 20 }}>Page: </div>
              <input
                type="number"
                placeholder={pageNum}
                value={pageNum}
                min="1"
                max="1000"
                id="pageNumTextBox"
                style={{
                  fontSize: "20px",
                  color: "var(--text)",
                  border: 0,
                  backgroundColor: "var(--light)",
                  borderRadius: 7,
                }}
                onChange={handleGoToPage}
                onBlur={handleBlur}
              />
            </div>
            {/* Button to Go to FlashCards */}
            <div
              class="headerButtons"
              style={{
                backgroundColor: "var(--bright)",
                cursor: "pointer",
                borderRight: "1px solid var(--borders)",
                width: "100%",
              }}
              onClick={() => handleGoToFlashCards()}
            >
              Review Mistakes
            </div>
          </div>
        </div>
      </header>
      <content style={{ fontSize: textSize, fontFamily: font }}>
        {/* Bookshelf */}
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
            <div
              class="book-stack-right"
              style={{ justifyContent: "flex-start" }}
            >
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
        <BookPage
          page={page}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          updateMistakeList={updateMistakeList}
          darkMode={darkMode}
        ></BookPage>
      </content>
    </div>
  );
}

export default Home;
