import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' },
    { id: 2, text: 'Which programming language is known as the "language of the web"?', options: ['Java', 'C++', 'Python', 'JavaScript'], correct: 'JavaScript' },
    { id: 3, text: 'What does CSS stand for?', options: ['Counter Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'], correct: 'Cascading Style Sheets' },
    { id: 4, text: 'What is the output of the following code snippet: `console.log(typeof []);`', options: ['Array', 'Object', 'Undefined', 'Null'], correct: 'Object' },
    { id: 5, text: 'In HTML, which tag is used to create an unordered list?', options: ['<ul>', '<ol>', '<li>', '<dl>'], correct: '<ul>' },
    { id: 6, text: 'What is the purpose of the SQL statement SELECT?', options: ['Insert new records', 'Update records', 'Delete records', 'Retrieve data'], correct: 'Retrieve data' },
    { id: 7, text: 'Which of the following is a JavaScript framework?', options: ['Django', 'React', 'Flask', 'Express'], correct: 'React' },
    { id: 8, text: 'What is the default file extension for a Python script?', options: ['.py', '.js', '.java', '.pyth'], correct: '.py' },
    { id: 9, text: 'What does the acronym API stand for?', options: ['Application Program Interface', 'Advanced Programming Interface', 'Application Processing Interface', 'Advanced Program Instruction'], correct: 'Application Program Interface' },
    { id: 10, text: 'What is the result of the expression 5 + "10" in JavaScript?', options: ['15', '510', '50', 'Error'], correct: '510' },
    // Add more questions here
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(100); // 60 seconds

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert(`Quiz is over! Your score is ${score}`);
      // You can add more logic to handle the end of the quiz
    }
  }, [timer, score]);

  return (
    <div>
      <div>
      <h1>Quiz App</h1>
      <p>By</p>
      <h2>Tauqueer Alam</h2>
      </div>
      <p>Timer: {timer}s</p>
      <p>Current Score: {score}</p>
      {currentQuestion < questions.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].text}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
                <br/>
              </label>
              
            ))}
          </form>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Over!</h2>
          <p>Your final score is {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
