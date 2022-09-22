import { createRandomNumberFromRange } from './utilities';

const Question = class {
  constructor(id, totalAnswers, correctAnswers) {
    this.id = id;
    this.answers = Question.createRandomAnswers(totalAnswers).sort();
    this.correct = this.createCorrectAnswers(correctAnswers).sort();
    this.hasMultipleCorrectAnswers = correctAnswers.max > 1;
  }

  static createRandomAnswers({ min, max }) {
    const total = createRandomNumberFromRange(min, max);
    const answers = [];
    for (let i = 0; i < total; i += 1) {
      answers.push(i + 1);
    }
    return answers;
  }

  createCorrectAnswers({ min, max }) {
    const total = createRandomNumberFromRange(min, max);
    // first copy the original array
    // then shuffle the copy
    // than return the first elements equal to total
    return this.answers.slice().sort(() => 0.5 - Math.random()).splice(0, total).sort();
  }
};

export default Question;
