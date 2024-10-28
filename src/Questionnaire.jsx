import React, { useState } from "react";
import questionsData from "./questionsData";
import QuestionPage from "./QuestionPage";
import { db } from "../firebaseConfig"; // Firebase Firestore

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleAnswerChange = (answer) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    db.collection("responses")
      .add(answers)
      .then(() => {
        setLoading(false);
        window.location.href = "/end";
      })
      .catch((error) => {
        setLoading(false);
        alert("Error saving responses: " + error);
      });
  };

  return (
    <div className="questionnaire">
      <QuestionPage 
        questionData={currentQuestion}
        answer={answers[currentQuestionIndex]}
        onChange={handleAnswerChange}
      />
      
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {currentQuestionIndex < questionsData.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>

      {/* Loading bar */}
      {loading && <div className="loading-bar">Submitting...</div>}
    </div>
  );
};

export default Questionnaire;
