// WordButton.js
import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported

const WordButton = ({ initialWord, id, updateMistakeList }) => {
  const [word, setWord] = useState(initialWord);
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state locally

  const onChange = async () => {
    setIsChecked((prevChecked) => !prevChecked); // Toggle checked state

    const prevWord = word;
    setWord("Loading ...");
    try {
      // fetch translation
      const response = await axios.get("http://127.0.0.1:5000/translation", {
        params: {
          word: initialWord,
        },
      });

      const translatedWord = response.data.word;

      // Toggle between the original word and the translated word
      setWord(prevWord === translatedWord ? initialWord : translatedWord);
      if (!isChecked) {
        updateMistakeList({
          word: initialWord,
          translation: translatedWord,
        });
      }
    } catch (error) {
      console.error("There was an error fetching the translation", error);
    }
  };

  return (
    <div className="checkbox-button-container">
      <input
        type="checkbox"
        id={id}
        className="checkbox-button-input"
        checked={isChecked} // Make checkbox checked based on dictionary state
        onChange={onChange}
      />
      <label htmlFor={id} className="checkbox-button-label">
        {word}
      </label>
    </div>
  );
};

export default WordButton; // Export the component
