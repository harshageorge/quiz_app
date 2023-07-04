"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  //   const [showScore, setShowScore] = useState(false);
  //   const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (answerOption) => {
 const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('you reached the end of the quiz');
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
    <div class="flex flex-row h-screen justify-evenly">
      <div class="m-auto">
        <div className="question-text">{questions[currentQuestion]?.questionText}</div>
        <div className="answer-section">
          {questions[currentQuestion]?.answerOptions.map((answerOption, index) => (
            <button class="bg-blue-500" onClick={() => handleAnswerButtonClick()}>{answerOption.answerText}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
