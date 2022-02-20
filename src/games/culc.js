import getNumber from '../modules/getNumber.js';

const operators = ['-', '+', '*'];
const mathOperashions = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const brainCalc = {
  maxNumber: 25,
  rule: 'What is the result of the expression?',
  numbers: [],
  operator: '',
  getNumber,
  getOperator() { return Math.floor(Math.random() * (operators.length)); },
  makeTask() {
    this.operator = operators[this.getOperator()];
    this.numbers[0] = this.getNumber(this.maxNumber);
    this.numbers[1] = this.getNumber(this.maxNumber);
    return `${this.numbers[0]} ${this.operator} ${this.numbers[1]}`;
  },
  correctAnswer() {
    return `${mathOperashions[this.operator](this.numbers[0], this.numbers[1])}`;
  },
};

export default brainCalc;
