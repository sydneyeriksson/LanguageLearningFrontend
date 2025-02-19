const Header = ({
  title,
  setDarkMode,
  setLanguage,
  setTextSize,
  setDifficulty,
  setFont,
  darkMode,
  language,
  textSize,
  difficulty,
  font,
  pageNum,
  handleGoToPage,
  handleBlur,
  handleGoToFlashCards,
  document,
  id,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        margin: 0,
        padding: 0,
        backgroundColor: "var(--light)",
      }}
    >
      {/* Title */}
      <div
        class="title"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   fontSize: "xx-large",
        //   width: "25%",
        //   justifyContent: "center",
        // }}
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
        <div class="select-dropdown" style={{ flexGrow: 1, display: "flex" }}>
          {/* Dark Mode selection component */}
          <select
            name="darkMode"
            id={`darkMode-${id}`}
            value={darkMode}
            style={{ flexGrow: 1 }}
            onChange={() =>
              setDarkMode(document.getElementById(`darkMode-${id}`).value)
            }
          >
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
          </select>
        </div>
        <div class="select-dropdown" style={{ flexGrow: 1, display: "flex" }}>
          {/* Font selection component */}
          <select
            name="font"
            id={`font-${id}`}
            value={font}
            style={{ flexGrow: 1 }}
            onChange={() =>
              setFont(document.getElementById(`font-${id}`).value)
            }
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
          </select>
        </div>
        <div class="select-dropdown" style={{ flexGrow: 1, display: "flex" }}>
          {/* Text Size selection component */}
          <select
            name="textSize"
            id={`textSize-${id}`}
            value={textSize}
            style={{ flexGrow: 1 }}
            onChange={() =>
              setTextSize(document.getElementById(`textSize-${id}`).value)
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
        <div class="select-dropdown" style={{ flexGrow: 1, display: "flex" }}>
          <select
            name="language"
            id={`language-${id}`}
            value={language}
            style={{ flexGrow: 1 }}
            onChange={() =>
              setLanguage(document.getElementById(`language-${id}`).value)
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
        <div class="headerButtons" style={{ padding: "13px", flexGrow: 1 }}>
          <div style={{ paddingRight: 20 }}>Page: </div>
          <input
            type="number"
            placeholder={pageNum}
            value={pageNum}
            min="1"
            max="1000"
            id={`pageNumTextBox-${id}`}
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
            borderRight: "1px solid var(--dusty)",
            flexGrow: 1,
          }}
          onClick={() => handleGoToFlashCards()}
        >
          Review Mistakes
        </div>
      </div>
    </div>
  );
};

export default Header; // Export the component
