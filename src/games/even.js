import getNumber from '../modules/getNumber.js';

const MAXIMUM_NUMBER = 100;

const brainEven = {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  getNumber,
  makeTask() {
    const number = this.getNumber(MAXIMUM_NUMBER);
    return number === 0 ? this.makeTask() : number;
  },
  correctAnswer(task) { return task % 2 === 0 ? 'yes' : 'no'; },
};

export default brainEven;
