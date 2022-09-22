import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

function Participant({ items, highlight }) {
  const { id, answers, total } = items;
  return (
    <div className="Participant">
      <p className="Name">
        Participant
        {' '}
        {id}
        {' '}
        - Result
        {' '}
        { ((total / answers.length) * 100).toFixed(0) }
        %
      </p>
      <div className="Result">
        { answers.map((question) => (
          <Question
            key={`Result${id}${question.id}`}
            items={question}
            highlight={highlight}
          />
        )) }
      </div>
    </div>
  );
}
Participant.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      correct: PropTypes.number,
      answers: PropTypes.arrayOf(PropTypes.number),
    })),
    total: PropTypes.number,
  }).isRequired,
  highlight: PropTypes.func.isRequired,
};

export default Participant;
