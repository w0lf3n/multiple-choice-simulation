/* eslint-disable max-len */

const createRandomNumberFromRange = (min, max) => ((min === max) ? min : Math.floor(Math.random() * (max - min + 1)) + min);

/** Simple and naive implementation of an array comparison using the difference of set theory.
 *
 * @param {Array<number>} test The array to be compared
 * @param {Array<number>} solution The array to be compared to
 * @param {number} total Total number of possible answers.
 * @returns The similarity of arr1 to arr2 in percent.
 */
const compareArraySimilarity = (test, solution) => test.filter((x) => solution.includes(x)).length / Math.max(test.length, solution.length);

export {
  compareArraySimilarity,
  createRandomNumberFromRange,
};
