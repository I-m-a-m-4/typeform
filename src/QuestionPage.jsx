import React, { useState } from "react";

const QuestionPage = ({ questionData, onChange, answer }) => {
  const { type, question, options, statement, para } = questionData;
  const [selectedOption, setSelectedOption] = useState(answer);
  const multiOption = ["A", "B", "C", "D", "E", "F"]; // Fixed multiOption array

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  const renderQuestion = () => {
    switch (type) {
      case "multipleChoice":
        return (
          <div className="glass">
            <h3 className="question">{question}</h3>
            {options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedOption === option ? "selected" : ""}`} // Add selected class
                onClick={() => handleOptionClick(option)}
              >
                <span
                  className={`abcd ${selectedOption === option ? "selected" : ""}`} // Check if option is selected
                >
                  <span className="subA">  {multiOption[index]} </span>
                 
                </span> 
                {option} {/* Assign letters */}
              </div>
            ))}
          </div>
        );
      case "yesNo":
        return (
          <div className="glass">
            <h3>{question}</h3>
            <div
              className={`yes-no ${selectedOption === "Yes" ? "selected" : ""}`} // Add selected class for Yes
              onClick={() => handleOptionClick("Yes")}
            >
              Yes
            </div>
            <div
              className={`yes-no ${selectedOption === "No" ? "selected" : ""}`} // Add selected class for No
              onClick={() => handleOptionClick("No")}
            >
              No
            </div>
          </div>
        );
      case "statement":
        return <p>{statement}</p>;
      case "text":
        return (
          <div className="glass">
            <h3>{question}</h3>
            <input
              type="text"
              value={selectedOption || ""}
              onChange={(e) => handleOptionClick(e.target.value)}
              placeholder="Type your answer"
            />
          </div>
        );
      case "para":
        return <p className="toufiqwelhp">{para}</p>;
      default:
        return null;
    }
  };

  return <div>{renderQuestion()}</div>;
};

export default QuestionPage;
