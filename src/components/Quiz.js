import React, { PropTypes } from 'react';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count" />
        <h1>XML Schiffe Quiz</h1>
        <div className="score-container">
          <h2>Punkte</h2>
          <div className="score">{score}</div>
        </div>
      </header>
      <div className="correct-modal">
        <div className="praise">Correct!</div>
        <div className="bonus"></div>
      </div>
      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;
