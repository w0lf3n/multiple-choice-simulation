import { createRandomNumberFromRange } from './utilities';

const Participant = class {
  constructor(id) {
    this.id = id;
    this.answers = [];
  }

  /** @param {Question} question  */
  answerQuestion(question) {
    const totalQuestions = question.answers.length;
    const questionsToAnswerLeft = question.answers.slice();
    const numberOfAnswersToGive = (question.hasMultipleCorrectAnswers)
      ? createRandomNumberFromRange(1, totalQuestions) : 1;

    const answersToQuestion = { id: question.id, answers: [] };
    for (let i = 0; i < numberOfAnswersToGive; i += 1) {
      const answerIndex = createRandomNumberFromRange(0, questionsToAnswerLeft.length - 1);
      answersToQuestion.answers.push(questionsToAnswerLeft[answerIndex]);
      questionsToAnswerLeft.splice(answerIndex, 1);
    }
    answersToQuestion.answers.sort();
    this.answers.push(answersToQuestion);
  }
};

export default Participant;
