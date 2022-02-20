import getNumber from '../modules/getNumber.js';
import getOperator from '../modules/getOperator.js';

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
  makeTask: () => {
    brainCalc.operator = getOperator(operators);
    brainCalc.numbers[0] = getNumber(brainCalc.maxNumber);
    brainCalc.numbers[1] = getNumber(brainCalc.maxNumber);
    const [first, second] = brainCalc.numbers;
    return `${first} ${brainCalc.operator} ${second}`;
  },
  correctAnswer: () => {
    const mathOperashion = mathOperashions[brainCalc.operator];
    return `${mathOperashion(brainCalc.numbers[0], brainCalc.numbers[1])}`;
  },
};

export default brainCalc;
