import getGcd from '../modules/getGcd.js';
import getNumber from '../modules/getNumber.js';

const brainGcd = {
  maxNumber: 100,
  rule: 'Find the greatest common divisor of given numbers.',
  numbers: [],
  getNumber,
  makeTask() {
    this.numbers[0] = this.getNumber(this.maxNumber);
    this.numbers[1] = this.getNumber(this.maxNumber);
    return `${this.numbers[0]} ${this.numbers[1]}`;
  },
  correctAnswer() { return `${getGcd(this.numbers[0], this.numbers[1])}`; },
};

export default brainGcd;
