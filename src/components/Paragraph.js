// Paragraph.js
import React from "react";
import WordButton from "../components/WordButton";

const Paragraph = ({ initialWord, id, updateMistakeList, language }) => {
  return (
    <div className="paragraph">
      {initialWord.map((item, index) => (
        <WordButton
          key={`${id}-${index}-${item}`}
          initialWord={item}
          id={[id, index]}
          updateMistakeList={updateMistakeList}
          language={language}
        />
      ))}
    </div>
  );
};

export default Paragraph;
