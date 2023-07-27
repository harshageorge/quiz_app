"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      console.log("correct");
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    const fetchPosts = () => {
    fetch("/api/users").then(response => {
        return response.json()
      })
      .then(data => {
        setQuestions(data);
      })
      };

    fetchPosts();
  }, []);

  return (
    <>
     {questions.length > 0 && (
    <div className="flex flex-row justify-evenly bg-sky-500 max-w-md p-8 rounded-md">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
          <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="bg-blue-500"
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          </>
      )}
    </div>
     )}
    </>
  );
}
