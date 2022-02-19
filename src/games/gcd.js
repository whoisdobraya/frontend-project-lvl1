import getGcd from '../modules/getGcd.js';
import getNumber from '../modules/getNumber.js';

const MAXIMUM_NUMBER = 100;

const brainGcd = {
  rule: 'Find the greatest common divisor of given numbers.',
  numbers: [],
  getNumber,
  makeTask() {
    this.numbers[0] = this.getNumber(MAXIMUM_NUMBER);
    this.numbers[1] = this.getNumber(MAXIMUM_NUMBER);
    return `${this.numbers[0]} ${this.numbers[1]}`;
  },
  correctAnswer() { return `${getGcd(this.numbers[0], this.numbers[1])}`; },
};

export default brainGcd;
