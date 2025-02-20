import React, { useState, useEffect, setPage, useRef } from "react";
import axios from "axios";
import BookPage from "../components/bookPage";
import Bookshelf from "../components/Bookshelf";
import Header from "../components/Header";
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
    const details = document.getElementById("bookshelf_details");
    details.removeAttribute("open");
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
      {/* <header> */}
      <div
        class="mobile-content"
        style={{ fontSize: textSize, fontFamily: font }}
      >
        <details id="bookshelf_details">
          <summary>Bookshelf</summary>
          <Bookshelf
            handleClickBook={handleClickBook}
            darkMode={darkMode}
          ></Bookshelf>
        </details>
        <details>
          <summary>Settings</summary>
          <Header
            title={title}
            setDarkMode={setDarkMode}
            setLanguage={setLanguage}
            setTextSize={setTextSize}
            setDifficulty={setDifficulty}
            setFont={setFont}
            darkMode={darkMode}
            language={language}
            textSize={textSize}
            difficulty={difficulty}
            font={font}
            pageNum={pageNum}
            handleGoToPage={handleGoToPage}
            handleBlur={handleBlur}
            handleGoToFlashCards={handleGoToFlashCards}
            document={document}
            id="drop-down"
          ></Header>
        </details>
        {/* <BookPage
          page={page}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          updateMistakeList={updateMistakeList}
          darkMode={darkMode}
          language={language}
        ></BookPage> */}
      </div>
      {/* </header> */}
      <header>
        <Header
          title={title}
          setDarkMode={setDarkMode}
          setLanguage={setLanguage}
          setTextSize={setTextSize}
          setDifficulty={setDifficulty}
          setFont={setFont}
          darkMode={darkMode}
          language={language}
          textSize={textSize}
          difficulty={difficulty}
          font={font}
          pageNum={pageNum}
          handleGoToPage={handleGoToPage}
          handleBlur={handleBlur}
          handleGoToFlashCards={handleGoToFlashCards}
          document={document}
          id="wide-view"
        ></Header>
      </header>
      <content id="swipeArea" style={{ fontSize: textSize, fontFamily: font }}>
        <div class="noDisplayOnMedia">
          <Bookshelf
            handleClickBook={handleClickBook}
            darkMode={darkMode}
          ></Bookshelf>
        </div>
        <BookPage
          page={page}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          updateMistakeList={updateMistakeList}
          darkMode={darkMode}
          language={language}
        ></BookPage>
      </content>
    </div>
  );
}

export default Home;
