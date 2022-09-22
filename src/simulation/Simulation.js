import Participant from './Participant';
import Question from './Question';
import { compareArraySimilarity } from './utilities';

const createTestCases = ({
  totalQuestions, totalAnswersMin, totalAnswersMax, correctAnswersMin, correctAnswersMax,
}) => {
  const questions = [];
  for (let i = 0; i < totalQuestions; i += 1) {
    questions.push(new Question(
      i,
      { min: totalAnswersMin, max: totalAnswersMax },
      { min: correctAnswersMin, max: correctAnswersMax },
    ));
  }
  return questions;
};

const runTestCases = (testCases, testRuns) => {
  const results = [];
  for (let i = 0; i < testRuns; i += 1) {
    const currentRun = new Participant(i);
    testCases.forEach((testCase) => currentRun.answerQuestion(testCase));
    results.push(currentRun);
  }
  return results;
};

/**
 * @param {Array<Question>} testCases
 * @param {Array<Participant>} results
 * @returns {Array}
 */
const evaluateResults = (testCases, results) => results.map((participant) => {
  let totalCorrectAnswers = 0;
  const answers = participant.answers.map((answer) => {
    const currentQuestion = testCases.find((question) => question.id === answer.id);
    const correct = compareArraySimilarity(answer.answers, currentQuestion.correct);
    if (correct === 1.00) {
      totalCorrectAnswers += 1;
    }
    return { id: currentQuestion.id, correct, answers: answer.answers };
  });
  return { id: participant.id, answers, total: totalCorrectAnswers };
});

const run = (testData, callback) => {
  const { totalParticipants, ...values } = testData;
  const tests = createTestCases(values);
  const results = runTestCases(tests, totalParticipants);
  const evaluation = evaluateResults(tests, results);
  if (callback instanceof Function) {
    callback({ tests, evaluation });
  }
};

export default run;
