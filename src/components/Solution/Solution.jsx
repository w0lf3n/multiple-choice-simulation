import React from 'react';
import PropTypes from 'prop-types';
import QuestionComponent from './Question';
import Question from '../../simulation/Question';

function Solution({ id, tests }) {
  return (
    <div className="Solution">
      { tests.map((item) => <QuestionComponent key={`Question${item.id}`} items={item} highlight={id} />) }
    </div>
  );
}

Solution.propTypes = {
  id: PropTypes.number.isRequired,
  tests: PropTypes.arrayOf(PropTypes.instanceOf(Question)).isRequired,
};

export default Solution;
