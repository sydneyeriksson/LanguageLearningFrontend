// WordButton.js
import React, { useState } from "react";
import WordButton from "../components/WordButton";

const Paragraph = ({ initialWord, id, updateMistakeList, language }) => {
  const [word, setWord] = useState(initialWord);

  return (
    <div class="paragraph">
      {word.map((item, index) => (
        <WordButton
          initialWord={item}
          id={[id, index]}
          updateMistakeList={updateMistakeList}
          language={language}
        />
      ))}
    </div>
  );
};

export default Paragraph; // Export the component
