import getGcd from '../modules/getGcd.js';

const MAXIMUM_NUMBER = 100;

const brainGcd = {
  rule: 'Find the greatest common divisor of given numbers.',
  numbers: [],
  getNumber() { return Math.floor(Math.random() * MAXIMUM_NUMBER); },
  makeTask() {
    this.numbers[0] = this.getNumber();
    this.numbers[1] = this.getNumber();
    return `${this.numbers[0]} ${this.numbers[1]}`;
  },
  correctAnswer() { return `${getGcd(this.numbers[0], this.numbers[1])}`; },
};

export default brainGcd;
