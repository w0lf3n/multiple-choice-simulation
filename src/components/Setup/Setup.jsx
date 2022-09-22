import React, { useState } from 'react';
import PropTypes from 'prop-types';
import runSimulation from '../../simulation/Simulation';

const DEFAULT_TOTAL_QUESTIONS = 10;
const DEFAULT_TOTAL_ANSWERS_MIN = 4;
const DEFAULT_TOTAL_ANSWERS_MAX = 4;
const DEFAULT_CORRECT_ANSWERS_MIN = 1;
const DEFAULT_CORRECT_ANSWERS_MAX = 2;
const DEFAULT_TOTAL_PARTICIPANTS = 10;

function Setup({ callback }) {
  const [totalQuestions, setTotalQuestions] = useState(DEFAULT_TOTAL_QUESTIONS);
  const [totalAnswersMin, setTotalAnswersMin] = useState(DEFAULT_TOTAL_ANSWERS_MIN);
  const [totalAnswersMax, setTotalAnswersMax] = useState(DEFAULT_TOTAL_ANSWERS_MAX);
  const [correctAnswersMin, setCorrectAnswersMin] = useState(DEFAULT_CORRECT_ANSWERS_MIN);
  const [correctAnswersMax, setCorrectAnswersMax] = useState(DEFAULT_CORRECT_ANSWERS_MAX);
  const [totalParticipants, setTotalParticipants] = useState(DEFAULT_TOTAL_PARTICIPANTS);

  const handleSubmit = (event) => {
    event.preventDefault();

    runSimulation(
      {
        totalQuestions,
        totalAnswersMin,
        totalAnswersMax,
        correctAnswersMin,
        correctAnswersMax,
        totalParticipants,
      },
      callback,
    );
  };

  // TODO validate form
  return (
    <div className="Setup">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="totalQuestions">
            Number of questions:
            <input id="totalQuestions" value={totalQuestions} onChange={(event) => setTotalQuestions(event.target.value)} />
          </label>
        </p>
        <p>
          <label htmlFor="totalAnswersMin">
            Number of answers: min:
            <input id="totalAnswersMin" value={totalAnswersMin} onChange={(event) => setTotalAnswersMin(event.target.value)} />
          </label>
          <label htmlFor="totalAnswersMax">
            max:
            <input id="totalAnswersMax" value={totalAnswersMax} onChange={(event) => setTotalAnswersMax(event.target.value)} />
          </label>
        </p>
        <p>
          <label htmlFor="correctAnswersMin">
            Number of correct answers: min:
            <input id="correctAnswersMin" value={correctAnswersMin} onChange={(event) => setCorrectAnswersMin(event.target.value)} />
          </label>
          <label htmlFor="correctAnswersMax">
            max:
            <input id="correctAnswersMax" value={correctAnswersMax} onChange={(event) => setCorrectAnswersMax(event.target.value)} />
          </label>
        </p>
        <p>
          <label htmlFor="totalParticipants">
            Number of participants:
            <input id="totalParticipants" value={totalParticipants} onChange={(event) => setTotalParticipants(event.target.value)} />
          </label>
        </p>
        <button type="submit">Run simulation</button>
      </form>
    </div>
  );
}

Setup.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Setup;
