const operators = ['-', '+', '*'];
const mathOperashions = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};
const MAXIMUM_NUMBER = 25;

const brainCulc = {
  rule: 'What is the result of the expression?',
  numbers: [],
  operator: '',
  getNumber() { return Math.floor(Math.random() * MAXIMUM_NUMBER); },
  getOperator() { return Math.floor(Math.random() * (operators.length)); },
  makeNumbers() { return [this.getNumber(), this.getNumber()]; },
  makeTask() {
    this.operator = operators[this.getOperator()];
    this.numbers[0] = this.getNumber();
    this.numbers[1] = this.getNumber();
    return `${this.numbers[0]} ${this.operator} ${this.numbers[1]}`;
  },
  correctAnswer() {
    return `${mathOperashions[this.operator](this.numbers[0], this.numbers[1])}`;
  },
};

export default brainCulc;
