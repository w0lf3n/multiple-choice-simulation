import React from 'react';
import PropTypes from 'prop-types';

function Question({ highlight, items }) {
  const { id, answers, correct } = items;
  return (
    <div className={`Question ${(highlight === id) ? 'Highlight' : ''}`}>
      <p className="QuestionID">
        Question
        {' '}
        {id}
      </p>
      <span>Answers</span>
      <span>{ answers.join(', ') }</span>
      <span>Correct</span>
      <span>{ correct.join(', ') }</span>
    </div>
  );
}

Question.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    answers: PropTypes.arrayOf(PropTypes.number),
    correct: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  highlight: PropTypes.number.isRequired,
};

export default Question;
