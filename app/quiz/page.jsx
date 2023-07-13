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
    const fetchPosts = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-row h-screen justify-evenly">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="m-auto">
          <div className="question-text">
            {questions[currentQuestion]?.questionText}
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
        </div>
      )}
    </div>
  );
}
