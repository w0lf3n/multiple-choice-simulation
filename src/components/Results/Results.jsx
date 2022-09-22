import React from 'react';
import PropTypes from 'prop-types';
import ParticipantComponent from './Participant';

function Results({ evaluation, highlight }) {
  return (
    <div className="Evaluation">
      {evaluation.map((item) => (
        <ParticipantComponent key={`Participant${item.id}`} items={item} highlight={highlight} />
      ))}
    </div>
  );
}

Results.propTypes = {
  evaluation: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    total: PropTypes.number,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      answers: PropTypes.arrayOf(PropTypes.number),
      correct: PropTypes.number,
    })),
  })).isRequired,
  highlight: PropTypes.func.isRequired,
};

export default Results;
