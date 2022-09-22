import React from 'react';
import PropTypes from 'prop-types';

function Question({ items, highlight }) {
  const { id, answers, correct } = items;
  return (
    <div
      className="Question"
      onPointerEnter={() => highlight(id)}
      onPointerLeave={() => highlight(-1)}
    >
      <p className="QuestionID">
        Question
        {' '}
        {id}
      </p>
      <span>Answers</span>
      <span>{ answers.join(', ') }</span>
      <span>Result</span>
      <span>
        {(correct * 100).toFixed(0)}
        %
      </span>
    </div>
  );
}

Question.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    answers: PropTypes.arrayOf(PropTypes.number),
    correct: PropTypes.number,
  }).isRequired,
  highlight: PropTypes.func.isRequired,
};

export default Question;
